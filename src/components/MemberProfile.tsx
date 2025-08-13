import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { updatePassword, updateProfile } from 'firebase/auth';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Phone, Calendar, Settings, LogOut, Trophy, Edit } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  plan: string;
  createdAt: Date;
  events: string[];
  status: string;
}

const MemberProfile: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!currentUser) return;

      try {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data() as UserProfile);
          setFormData({
            name: userDoc.data().name || currentUser.displayName || '',
            phone: userDoc.data().phone || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          });
        } else {
          // Create profile if it doesn't exist
          const defaultProfile: UserProfile = {
            name: currentUser.displayName || '',
            email: currentUser.email || '',
            phone: '',
            plan: 'monthly',
            createdAt: new Date(),
            events: [],
            status: 'active'
          };
          setProfile(defaultProfile);
          setFormData({
            name: defaultProfile.name,
            phone: defaultProfile.phone,
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          });
        }
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [currentUser]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !profile) return;

    try {
      // Update Firebase Auth profile
      if (formData.name !== profile.name) {
        await updateProfile(currentUser, { displayName: formData.name });
      }

      // Update password if provided
      if (formData.newPassword) {
        if (formData.newPassword !== formData.confirmPassword) {
          alert('As senhas não coincidem');
          return;
        }
        await updatePassword(currentUser, formData.newPassword);
      }

      // Update Firestore document
      await updateDoc(doc(db, 'users', currentUser.uid), {
        name: formData.name,
        phone: formData.phone,
        updatedAt: new Date()
      });

      // Update local state
      setProfile({
        ...profile,
        name: formData.name,
        phone: formData.phone
      });

      setEditing(false);
      setFormData({
        ...formData,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });

      alert('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Erro ao atualizar perfil. Tente novamente.');
    }
  };

  const handleCancelMembership = async () => {
    if (!currentUser || !confirm('Tem certeza que deseja cancelar sua assinatura?')) return;

    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        status: 'cancelled',
        cancelledAt: new Date()
      });

      alert('Assinatura cancelada com sucesso.');
      logout();
    } catch (error) {
      console.error('Erro ao cancelar assinatura:', error);
      alert('Erro ao cancelar assinatura. Tente novamente.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Perfil não encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                <p className="text-gray-600">{profile.email}</p>
                <div className="flex items-center mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    profile.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {profile.status === 'active' ? 'Ativo' : 'Cancelado'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setEditing(!editing)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
              >
                <Edit className="h-5 w-5" />
                <span>{editing ? 'Cancelar' : 'Editar'}</span>
              </button>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700"
              >
                <LogOut className="h-5 w-5" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações do Perfil</h2>
              
              {editing ? (
                <form onSubmit={handleUpdate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nova Senha (opcional)</label>
                    <input
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Deixe em branco para manter a atual"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Nova Senha</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirme a nova senha"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Salvar Alterações
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditing(false)}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="text-sm text-gray-500">Nome</span>
                      <div className="font-medium">{profile.name}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="text-sm text-gray-500">Email</span>
                      <div className="font-medium">{profile.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="text-sm text-gray-500">Telefone</span>
                      <div className="font-medium">{profile.phone || 'Não informado'}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="text-sm text-gray-500">Membro desde</span>
                      <div className="font-medium">
                        {profile.createdAt instanceof Date 
                          ? profile.createdAt.toLocaleDateString('pt-BR')
                          : new Date().toLocaleDateString('pt-BR')
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Plan Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Plano Atual</h3>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {profile.plan === 'monthly' ? 'Mensal' : 'Anual'}
                </div>
                <div className="text-gray-600 mb-4">
                  {profile.plan === 'monthly' ? 'R$ 29,90/mês' : 'R$ 299,90/ano'}
                </div>
                <div className="text-sm text-gray-500">
                  Próxima cobrança: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>

            {/* Events Participated */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Eventos Participados
              </h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {profile.events?.length || 0}
                </div>
                <div className="text-sm text-gray-500">eventos</div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Ações
              </h3>
              <div className="space-y-3">
                <button
                  onClick={handleCancelMembership}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Cancelar Assinatura
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
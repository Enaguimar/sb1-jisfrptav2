export const login = async (username: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('adminToken', token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error durante el login:', error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('adminToken');
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('adminToken');
};
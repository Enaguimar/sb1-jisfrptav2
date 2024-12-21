interface Captcha {
  text: string;
  code: string;
}

export const generateCaptcha = (): Captcha => {
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  // Create a text version with spaces for better readability
  const text = code.split('').join(' ');
  
  return { text, code };
};
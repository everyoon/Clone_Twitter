import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';
import { auth } from '../routes/firebase';
import { useNavigate } from 'react-router-dom';

const Button = styled.span`
  background-color: #fff;
  margin-top: 50px;
  padding: 10px 20px;
  border: 0;
  border-radius: 50px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: #000;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 25px;
`;
export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      Github로 로그인하기
    </Button>
  );
}

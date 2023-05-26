import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Profile
        image="https://avatars.githubusercontent.com/u/109942639?v=4"
        name="Seolyu Lee"
        title="개발자"
      />
      <Profile
        image="https://avatars.githubusercontent.com/u/54212261?v=4"
        name="Yeasul Lee"
        title="학생"
        isNew={true}
      />
      <Profile
        image="https://avatars.githubusercontent.com/u/87212165?v=4"
        name="끼끼"
        title="개발자"
      />
    </>
  );
}

export default AppProfile;

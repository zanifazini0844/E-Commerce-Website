import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const styles = {
  container: {
    padding: '3rem',
    margin: '3rem',
    fontFamily: '"Playwrite DK Uloopet", cursive',
  },
  card: {
    width: '75%',
    padding: '3rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  userInfo: {
    marginBottom: '1rem',
    color: '#333',
  },
  userLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontFamily: '"Playwrite DK Uloopet", cursive',
  },
  userLinkHover: {
    textDecoration: 'underline',
  },
};

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard"}>
      <div className="container-flui" style={styles.container}>
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card" style={styles.card}>
              <div className="user-info" style={styles.userInfo}>
                <h3>{auth?.user?.name}</h3>
                <h3>
                  <a
                    href={`mailto:${auth?.user?.email}`}
                    style={styles.userLink}
                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    {auth?.user?.email}
                  </a>
                </h3>
                <h3>{auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

export const Header = ({userData}) => {
  return (
    <div className="header">
      <h2 id='app-name'>Titolo</h2>
      <div className="user-data">
        <img id='user-avatar' src='./../images/avatar.png' alt='User Avatar'/>
        <p></p>
      </div>
    </div>
  )
}

export default Header
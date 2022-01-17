import React from 'react'
import ProfileImage from '../images/korirdennis.jpg'

function Profile() {
    return (
        <div>
            <img className='profile-pricture' src={ProfileImage} alt="Profile" />
            <main className='profile-content'>
                <h1 className='profine-name'>Dennis Korir</h1>
                <p>Frontend Developer</p>
                <p>dennis.korir@brandandtargets.com </p>
                <button>Email</button>
                <button>LinkdIn</button>

                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quasi, quisquam.  </p>    
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quasi, quisquam.  </p>    
                
                <footer>
                    <p>&copy; 2020 Dennis Korir</p>
                </footer>
            </main>

        </div>
    )
}

export default Profile

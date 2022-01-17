import React from 'react'
import ProfileImage from '../images/korirdennis.jpg'

function Profile() {
    return (
        <div>
            <img className='profile-pricture' src={ProfileImage} alt="Profile" />
            <main className='profile-content'>
                <h1 className='profine-name'>Dennis Korir</h1>
                <p className='profile-role'>Frontend Developer</p>
                <p className='profile-email'>dennis.korir@brandandtargets.com </p>
                <button className='btn-profile-email'>
                    <i class="fas fa-envelope"></i> Email</button>
                <button className='btn-profile-linkedin'>
                    <i class="fab fa-linkedin"></i> LinkdIn</button>

                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quasi, quisquam.  </p>    
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quasi, quisquam.  </p>    
                
                <footer>
                    <i class="fab fa-twitter-square"></i>   
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-github-square"></i>
                </footer>

            </main>

        </div>
    )
}

export default Profile

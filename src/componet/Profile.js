import React from 'react'
import ProfileImage from '../images/korirdennis.jpg'

function Profile() {
    return (
        <div>
            
            <main className='profile-content'>
            <img className='profile-pricture' src={ProfileImage} alt="Profile" />
                <h1 className='profine-name'>Dennis Korir</h1>
                <p className='profile-role'>Frontend Developer</p>
                <p className='profile-email'>dennis.korir@brandandtargets.com </p>
                <button className='btn-profile-email'>
                    <i class="fas fa-envelope"></i> Email</button>
                <button className='btn-profile-linkedin'>
                    <i class="fab fa-linkedin"></i> LinkdIn</button>

                <h3 className='profile-title'>About</h3>
                <p className='profile-text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, an dI am always looking for new things to learn</p>    
                <h3 className='profile-title'>Interests</h3>
                <p className='profile-text'>Food expert, Music scholar, Reade. Internet fanatic, Bacon buff. Entrepneur. Travel gee. Pop culture ninja. Coffee fanatic.</p>    
                
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

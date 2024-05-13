import React from "react";
import './Introduction.scss'
import 'App.scss'

function UserIntroduction() {
    return(
        <div class="wrapper--intro">
            <div class="taskbar">
                <div>
                    <img src="./assets/images/cat.png" class="user-avatar"></img>
                </div>
                <div class="username">
                    <b>Username</b>
                </div>
                <a href="user-profile1.html"><button type="button" class="exit-btn">X</button></a>
            </div>

            <div>
                <p><strong>Contact me: </strong><a href="#">facebook.com/username</a></p>
                <p><strong>About me: </strong>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, dolores repudiandae mollitia rem perferendis consectetur in cupiditate a, maiores dolorem sit nostrum nesciunt dolore nam, sed numquam repellat fuga cum!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam reprehenderit repellat unde. Nobis accusamus labore sapiente architecto minima hic enim minus. Amet vel temporibus earum cupiditate exercitationem enim quis fugit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora error deleniti praesentium dolore tempore ad vel expedita eos consequatur. Sed dolore molestias harum labore natus totam quod. Aperiam, magnam!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque vero suscipit laudantium sunt impedit a, numquam dolorem sed quaerat debitis eum laboriosam at culpa possimus amet, quos tenetur reprehenderit!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consequatur iusto alias deleniti laborum aliquid exercitationem voluptatum odio ut accusantium doloremque unde, quasi ipsam consequuntur facere magni tempora cupiditate ipsum?</li>
                </p>
            </div>
        </div>
    )
}

export default UserIntroduction
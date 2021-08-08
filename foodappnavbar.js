function navbar() {
    
    return `<div id="navbar">
            <div id="box1"><a style="text-decoration: none; color:black" href="foodapp1.html">Home</a></div>
            <div id="navright">
                <input type="text" id="inp" oninput="throttel()"/>
                <div onclick="searchmeal()">Serach</div>
                <div><a style="text-decoration: none; color:black" href="foodapp2rep.html">Get receipe</a></div>
                <div><a style="text-decoration: none; color:black" href="foodapp3latest.html">Latest receipe</a></div>
                <div><a>Login</a></div>
                <div><a>Signup</a></div>
            </div>

        </div>`
}

export default navbar;





        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '1234567890';
        const symbols = '`=!@#$%^&*()_+[]{}|;:",./<>?/';

        let allChars = upperCase + lowerCase + numbers + symbols;
          
        function generatePassword(length) {
            
            let password = "";
            for (let i = 0; i < length; i++) {
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }
            console.log(password);
            return password;
        }
        
        

        document.querySelector("button").addEventListener("click", function() {
            let length = document.querySelector("#number")
            const passwordLength = length.value;
            const generatedPassword = generatePassword(passwordLength);

        let input = document.querySelector("#password");
        input.value = generatedPassword; 


        })

        const copyButton = document.querySelector("#copyButton");
        copyButton.addEventListener("click", function() {
        password.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    });


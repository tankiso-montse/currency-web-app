Web Currency App 

----------------------------------------------------------------#TODO -INSTALLATION------------------------------------------------------
``` Clone the repository: ```
~ git clone https://github.com/tankiso-montse/currency-web-app.git

---------------------------------------------------------------#NOTE - Node.js Installation----------------------------------------------
 Open a terminal or command prompt.
- Type node -v and press Enter.
-- If Node.js is installed, it will display the version number. If not, you will see an error message.

``` Install Node.js: ```
- If Node.js is not installed, download it from nodejs.org.
- Follow the installation instructions for your operating system.

--------------------------------------------------------------#NOTE -Vite Installation Guide ###-----------------------------------------

Using Homebrew (macOS)
~ brew install vite
~ vite --version // Verify installation

Normal Installation
~ npm install -g create-vite
~ vite --version // Verify installation

--------------------------------------------------------------#NOTE -Yarn Installation Guide ###--------------------------------------
(Package Manager)

``macOS Homebrew (recommended)``
~ brew install yarn

Installer script

Alternatively, you can use the installation script provided by Yarn:
~ curl -o- -L https://yarnpkg.com/install.sh | bash
This will download and run the installation script. Follow the on-screen instructions to complete the installation.

Linux

~ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn

Windows
Chocolatey (recommended)

If you have Chocolatey installed, you can install Yarn using the following command:
~ choco install yarn

Installer
Alternatively, you can download the Windows installer from the Yarn website and follow the installation instructions.

~ yarn --version // verifiy installation


----------------------------------------------------------------#NOTE - Usage---------------------------------------------------------

cd ~ tech_assessment 
cd ~ currency-web-app
~ code . 

Install dependencies (if you haven't already):If you haven't installed the project dependencies yet, you can do so using Yarn:

~ yarn install

Run the Vite development server:To start the Vite development server, use the following command:
~ yarn dev

From there do 


------------------------------------------------------------#NOTE - API Configuration-------------------------------------------------

1. Create an account and obtain an API key:
 - Go to the Open Exchange Rates website: https://openexchangerates.org/
 - Click on "Sign Up" and create a new account.
 - Once logged in, navigate to the "API Usage" section or similar.
 - Generate an API key for your account. Copy this API key as you'll need it for the next steps.
2. Create a .env.local file:
 - In your project directory, create a new file named .env.local. This file will store your API key.
 - Open the .env.local file in a text editor.
 
 3. Store the API key in the .env.local file:
   - In the .env.local file, add the following line: VITE_API_KEY=YOUR_API_KEY_HERE
   - Replace YOUR_API_KEY_HERE with the API key you obtained from Open Exchange Rates.

This is the README file for CVGenerator.py, a Python script that generates a basic static website which I use as my online CV.
The generated website is optimized to work with [GitHub Pages](https://pages.github.com).
However this script can be customized to generate a website with any other content, featuring a submenu navigation.

#Installation
To use this script you need Python 3 and the modules [markdown](https://pypi.python.org/pypi/Markdown) and [htmldom](http://thehtmldom.sourceforge.net).
Follow those links to learn how to install these modules.  
  
Copy the script to a folder which should contain the css for your website, named as *main.css*, and the favicon, named as *favicon.png*.
This root folder of your website will also contain other assets, particularly any images you want to feature on pages.  
  
Create the folders *skills*, *_md* and *_nav*. Inside *_md* create the folder *skills*.

#How does it work?
Add the Markdown files of the main menu pages to the folder *_md* and the Markdown files of the submenu (which is in my case named "skills") to the folder *_md/skills*.
The first line of these files should contain only the name of the page as it will appear on the navigation.
You should name the home page as *index.md*
  
Run the script. This will create *.csv* files on the folder *_nav*.
Open these files and order the pages as you want them to appear on the navigation bar.
Run the script again. That's it, you have your website.
The html for the main menu pages is in the root folder of your project and the html for the submenu pages is in the folder *skills*.

##Images
To add images to your post first add the image to the root folder of your website and link to it on the Markdown file of the page you want to insert it, simply calling it by its name (do not add the path to the folder, the script will do it for you):

    #Adding an image
    
    Add the file (let's call it *some_image.png*) to the root folder of your website.
    Then link simply link to that file as you would do normally with Markdown:
    
    ![some_image.png]

##Adding pages
If you have a website already built but you need to add a page, simply add the Markdown file to the corresponding folder and run the script. A new *menu.csv* or *submenu.csv* file will be created in the folder *_nav*.
You can then order the pages again and rerun the script. Note that if you only added a menu page, only *menu.csv* will change (and the same for a submenu page).

#Customization
To edit the content of the pages head, header and footer, follow the comments on the script which begin with "Customization:".
To change the name of the submenu (named "skills" by default) change the string argument on the following line (must be second to last line):

    website = Website('skills')

Also you should change the name of folders *skills* and *_md/skills* to the new name of the submenu.

##License
This script is MIT licensed. In case you build something based even if partially on this code, I would be happy if you link to this repository or to [my website](http://controlledflame.com) - although you don't have to.

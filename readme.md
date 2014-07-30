Apache setup

1) Make sure you add a setting for accessing the .htaccess which is within a subfolder of the main project folder

#<Directory /web_root/main_folder/>
#       Options Indexes FollowSymLinks
#        AllowOverride All  
#       Require all granted
#</Directory>

Statamic setup

1) Change environment settings within statamic/_config/environments/*.yaml
2) Add .htaccess file to server (we're ignoring it in git)
3) Adjust last line of statamic/.htaccess depending on whether you're in a subfolder or not
4) Confirm statamic/_cache exists and is set to 777
5) Set statamic/_config/_users to 777
5) If using prepackaged themes set statamic/assets/_users to 777

Gulp Setup

1) Gulp is configured to output files to statamic/_themes/main/. On initial load I'm calling gulp-clean which will clear all directories and then recompile all files. Turn this of off in the gulpfile.js file if you don't want to have your files deleted. 
2) To use your own custom theme change statamic/_config/settings.yaml theme info to 'main'.
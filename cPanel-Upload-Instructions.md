# Pixsell Website - cPanel Upload Instructions

This document provides instructions for uploading the Pixsell website to a cPanel hosting account.

## Files Included

- `pixsell-website-cPanel.zip` - Contains the complete website files for upload

## Upload Instructions

1. **Log in to your cPanel account**
   - Use the credentials provided by your hosting provider

2. **Access File Manager**
   - In cPanel, look for the "Files" section and click on "File Manager"
   - Make sure you're in the public_html directory (or the directory where you want to install the website)

3. **Upload and Extract the Files**
   - Click the "Upload" button at the top of the File Manager
   - Upload the `pixsell-website-cPanel.zip` file
   - Once uploaded, return to the File Manager
   - Right-click on the zip file and select "Extract"
   - Extract to the current directory or public_html

4. **Move Files (if needed)**
   - After extraction, you'll have an "out" folder containing all website files
   - If you want the website to be accessible at the domain root:
     - Select all files and folders inside the "out" directory
     - Click "Move" and move them to the public_html directory
     - Ensure you include the hidden .htaccess file

5. **Set Permissions**
   - Select all files and folders
   - Click "Permissions" or "Change Permissions"
   - Set folders to 755 and files to 644

6. **Configure Domain (if needed)**
   - If you're setting up a new domain or subdomain, make sure it points to the correct directory

## Troubleshooting

- **404 Errors**: Make sure the .htaccess file was properly uploaded and has the correct permissions
- **Missing Images**: Check that all paths are correct and the files were uploaded
- **Mobile Display Issues**: Clear your browser cache and check again

## Support

If you encounter any issues, please contact support at [support@pixsellgames.com](mailto:support@pixsellgames.com) 
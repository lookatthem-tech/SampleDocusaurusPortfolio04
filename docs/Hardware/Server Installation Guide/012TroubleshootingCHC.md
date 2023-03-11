---
sidebar_position: 11
---

# Troubleshooting CHC
The following sections provide information for troubleshooting while installing a CHC. Although Prysm has extensively tested the installation and upgrade process, we can't test all variables in every customer environment. If you experience an installation or upgrade issue not covered below, contact Prysm Support (support@prysm.com).



If the server was renamed after Synthesis was installed, a Windows Service User account might not authenticate correctly.
#### Resolution
When you sign in to the server, check the computer name. Also, in the Prysm installation wizard, check the host name that is displayed in the Settings for the Prysm Application Server section.

These names should be the same.

If they are not, you might want to rename your server. Follow these steps to rename:

1. From the Start Screen, select **Server Manager**.
1. Select **Local Server**.
1. Click the current computer name.
   The System Properties dialog box opens.
1. Click **Change** and enter a new computer name.



The server was renamed after IIS was installed, causing a name conflict between IIS and the server.
#### Resolution
Rename the IIS server to the same name as the machine.

From IIS, right-click the server, click **Rename**, and enter the correct machine name.



You might receive an error that looks like this:

#### Resolution
Associate the Windows Service User account name with the Prysm Macro Service.

1. Open **Services.**
1. Right-click the Prysm Macro Service and click **Properties.**
1. From the **Log On** tab, enter the Windows Service User account information.



The SSL Certificate Publisher, which is part of the installer, only updates SSL certificates for the Prysm Application Server and Prysm for web applications. Additional steps are required to update the SSL certificate for the Web Admin interface.
#### Resolution
In IIS, follow these steps:

1. Right-click the **Prysm Admin** site.
1. Select **Edit Bindings**.
1. In the SSL certificate section, select a certificate from the list or click **Select** to browse for a certificate.


#### Resolution
Check the SAN, which is mounted to the PAS server for available space, and add space if needed.

**Note:** Managing disk space on the SAN, which is mounted to the Prysm server instance, is a customer responsibility. Prysm does not monitor the disk utilization of the customer-provided SAN for available space or provide alerts when there is insufficient space for content served by the Prysm Application Server.


#### Resolution
This could be caused by connectivity issues between the CHC server and the database server. To verify, use telnet to check connectivity of the CHC server to the database server.

Another cause could be that some needed services aren't started. To verify:

1. Open the Services MMC and check that the following services are running: 
   1. Prysm Macro Service
   1. Redis
   1. redis (ken)
   1. redis (refresh)

1. Check that all Prysm micro services are started. In the CHC server, open a web browser and navigate to **http://localhost:3400/macroviewer/service**. If any services are not started, click Restart or open Services.msc and restart the Prysm Macro Service.


#### Resolution
Ensure that the password to the service account running the Prysm Macro Service is correct.


#### Resolution
The Redis service requires enough free disk space as system memory. If the CHC server has 32 GB of memory, Redis will need 32 GB of available disk space for the Redis cache. Check that the CHC Server has the available disk space in the system partition.

Sometimes, when the CHC Server does not go through a graceful shutdown, the Redis cache might not get deleted and stale Redis cache files will consume disk space. To clear the stale cache files, stop all the Redis services, delete all the Redis cache files located in C:\Windows\ServiceProfiles\NetworkService\AppData\Local\Redis, start the Redis services, and restart the Prysm Macro Service.


#### Resolution
On the Prysm for web sign in page, when you click the Sign In button, you might see the error message saying "Please check your internet connection and refresh the page." This means you aren't using the Prysm for web URL that was configured during your CHC installation. To access Prysm for web, verify that you're using the URL that was entered in the configuration steps in the Server Mappings section of the installation guide.


#### Resolution
If you see an error saying "Initialization Failed" when you click Synthesis.exe, decrypt the C:\Synthesis\Synthesis.exe.config file on the appliance and verify the following: 

- CloudURI is set to add key="CloudURI" value="https://CHC\_hostname.prysm.com/Cloud".
- MachineKey is set to add key="MachineKey" value="1234567890".
- AllowSelfSignedCert is set to add key="AllowSelfSignedCert" value="true".
- The appliance can resolve to the CHC hostname.
- All the required ports are open.
- All Prysm Microservices are started.
- In the CHC server, open a web browser and navigate to http://localhost:3400/macroviewer/service. If any services are not started, click Restart or open Services.msc and restart the Prysm Macro Service.


#### Resolution
The remote logging hostname and port might not be available. In Prysm Web Admin, disable remote logging. Go to Settings  Settings Profiles  Edit Profile Settings  Server  Logging, and switch Enable Remote Logging to OFF.


#### Resolution
The SMTP server information entered during installation might have changed or is incorrect.

Modify the SMTP information in the CloudService.exe file found here: **C:\Program Files\Prysm\MicroService\CloudService\CloudService.exe.config file**

Make the mailSettings section look like this:

mailSettings 
smtp from="noreply@prysm.com" 
network defaultCredentials="false" host="smtp.mandrillapp.com" 
password="password" port="587" userName="SMTPUser@test.com" 
enableSsl="false" 
/smtp 
/mailSettings


#### Resolution
If your uploads folder is full, you might want to move the folder to a different drive. To manually change the location of your Uploads folder, follow these steps:

1. Stop the Prysm Macro Service and create backups of your config file before editing the config files.
1. Locate the following field, and replace c:\Uploads with the directory path of the new location:
   add key=”OnPremStorageLocation” value=”c:\Uploads” /
1. Repeat steps 1 and 2 for the following config files: 
   C:\Program Files\Prysm\MicroService\CloudService\CloudServices.exe.config
   C:\Program Files\Prysm\MicroService\ContentService\ContentServices.exe.config
   C:\Program Files\Prysm\MicroService\TranscodeService\TranscodeService.exe.config
   C:\Program Files\Prysm\MicroService\UploadService\UploadService.exe.config
1. Start the Prysm Macro Service.



If you find that the Synthesis installer isn't available in Synthesis Manager but publishing the installer results in an “already exists” error, try the following resolution.
#### Resolution
In the CHC Server, delete all the contents of C:\Program Files\Prysm\Installs. Launch the CHC installer. Go to [this section of the CHC installation](005CHCNewInstallations.htm) guide to publish the installer.

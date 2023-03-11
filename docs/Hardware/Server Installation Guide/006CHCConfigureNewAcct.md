---
sidebar_position: 5
---

# Configuring a new account
**Warning:** This section applies to only new installations. If you are upgrading from server 2.2 or 2.3.1, don't follow these steps.

After a new installation of the Prysm server, you must create an account, create a user with organizational administrator rights, and create deployments for the appliances in your environment.



An account ties together the organization's users, permission groups, and settings. During installation, a Prysm account is created by default but this is a provisioning account. You must create an account for the deployment.

1. Sign in to the Web Admin interface as a provisional user with the user name **Provisioning**. If needed, request the password for the Provisioning user from Prysm Support.
1. Navigate to the Accounts page.
1. Click **Create Account** to create a new account.
1. In the Account Name field, enter an account name, such as your company name.
1. After the Account is created, copy the Account ID and email it to [licensing@prysm.com.](mailto:licensing@prysm.com)



1. After you have an entitlement key, from the Accounts page, select the account (or use the Search field to find the account).
1. For the desired account, click **Impersonate**. A message is displayed at the top of the browser that lists the account you are impersonating.
1. Navigate to the Licenses page. When the account is not licensed or when the licenses are expired, a warning message is displayed and Prysm is not available for use.
1. From the Licenses page, click **Activate Server.**
1. From the Activation page, click **Choose File** and browse for the entitlement key file provided by Prysm (see Step 1).
1. Click **Activate**.
   If the file loads successfully, you are returned to the Licenses page, which has been updated based on the entitlement key. You can see the number and type of licenses available.
   If the entitlement key fails to load, an error message is displayed. Contact Prysm Support for assistance.



An Org\_Admin user is the technical point of contact for Prysm at a customer site. This user can manage users and user licenses, create snap grids, and adjust settings for their Prysm deployments.

1. From the Users page, click **Create User**.
1. Create a new user with a temporary password. In most cases, the license type for this user is UserLicense.
1. Click **Save** to confirm and create the user.
1. From the Permission Groups page, find the Org\_Admin group and click **Add/Remove Users**.
   The Manage Users - Org\_Admin page is displayed with a list of the users in the Org\_Admin permission group.
1. From the Other Users column, select the user you just created and click **Add** to add it to the Org\_Admin Permission Group.

**Note:** Share the sign in and password with the new org\_admin user.



1. From the **Customer Hosted Cloud - Application Server Deployment Package**, edit the **SynthesisSettingsManager.exe.config** file in notepad.
   1. Locate the **connectionString** section of **SettingsDataContext** as highlighted in the following image:
   1. Change the **source=localhost** line to **source=IP Address of the DB Server or DNS Address of the DB Server**. (For example, source=192.168.11.46).
   1. Replace integrated security=True; with User ID=SQL User;Password=sql\_password;
      where the **SQL User** and **sql\_password** are the **dbowner** credentials for the SQL server database (scroll left as needed to see the entire field).
      You must use SQL authentication for this account.
   1. **Save** and **close** the updated SynthesisSettingsManager.exe.config file.
1. Double-click the **SynthesisSettingsManager** application to run the application.
1. Under the Load Settings tab, select **Browse.**
1. Navigate to the Customer Hosted Cloud - Application Server Deployment Package and open the **2.7\_SettingsTemplate.**
1. In the Setting Group Name text box, type **2.7 Template.**
1. From the Account Name list, select the Customer Account you created.
1. **Check** the As a Group Template check box.
1. Select the **Generate** button.

**Warning:** The Generate button has no visual indication that it has or has not been clicked. It's very important that you NOT click **Generate** more than once.



After the Preview of the written XML file:section is populated, the template has completed uploading of the Settings Template.

1. Close the SynthesisSettingsManager.



A deployment ties a specific settings profile to a specific Prysm appliance, effectively activating the appliance.

1. Make sure you are still impersonating the desired account.
1. From the Settings page, select **Create Settings Profile**.
1. From the **Settings Template** list, select a template you added.
1. In the Profile Name field, create a name for the Settings Profile name based on the Display Form Factor, the Region or Location of the deployments that will use it, and a descriptor of what the profile is used for. Then click **Save**. For example, **C85\_PrysmSanJose\_Shared**.
1. From the Deployment page, click **Create Deployment**.
1. In the Location Name field, enter a unique location that provides insight as to the site where the Prysm appliance will be deployed.
1. In the Machine Key field, enter the Prysm Serial Number (not the HP serial number) printed on the sticker. Typically, these are 10-character numeric serial numbers.
1. In the Settings Profile field, select the **Settings Profile** that you created in steps 1-2.
1. Select **Save**.
   The Deployment is created and is associated with the Settings Profile.
1. Repeat for additional appliances.

Now that the new account is configured, the customer Org Admin can apply licenses to activate the installation, create users, and manage permissions. You can find all the instructions in Prysm's [Admin Help Center](https://help.prysm.com/admin/Default.htm).


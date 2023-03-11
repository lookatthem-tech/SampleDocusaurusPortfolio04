---
sidebar_position: 1
---

# **Prerequisites for setting up a CHC**
This section covers the prerequisite steps and requirements prior to installing and configuring a Prysm Application Server, such as configuring DNS entries, granting forward access to certain ports, and setting up a Virtual Machine (VM) in accordance with the minimum recommended requirements.

- Prysm recommends that the entire host is dedicated to the VM, with the minimum required cores assigned to the host. 
- Oversubscription of the host—either by incorrectly setting the number of VM virtual CPUs, or by contention for CPU resources amongst VMs—will result in degraded performance for your Prysm users.
- VMware CPU Core "pinning" or Hyper-V "Virtual Machine Reserve" options should be used to prevent any Core contention. 
- All memory channels should be populated to maximize available memory bandwidth (typically 4 channels per physical CPU).
- Out-of-band management systems should not be configured to share a network port with the VM.



- Server Manufacturer: Any (HP, Dell, or Cisco recommended) 
- Processor Type: Intel Xeon 2600 v2 or later
- Processor Frequency: 2.0GHz or greater
- Memory: 2GB RAM per core (Minimum of 8 cores)
- Primary Storage: 100GB (SSD highly recommended)
- HyperVisor: VMware ESXi 5.0 update or above; or Hyper-V 2012 or above
- Network Interface: 
  HyperV: Standard network adapters are preferred 
  VMware: VMXnet network adapters are preferred
- Operating System: Windows Server 2012 R2
- Additional Dependencies: IIS (set up by the installer during the installation process) and .NET 4.5.2



The customer must also provide SQL and Storage Area Network instances that are accessible to the VM Host in which Prysm Application Server will be installed.

- Provide and configure SQL Server 2012 with at least 2GB storage each for two databases.
  - During installation, Prysm will attach to two databases (synthesislocal and licensing) using a customer-provisioned service account.
  - The database schema will be established during the installation process. The service SQL Server Browser must be enabled and running.
  - Use SQL Server Configuration Manager (for SQL Server Network Configuration) to enable Named Pipes and TCP/IP.
- Provision and share a Domain or SQL specific user account with the following permissions: 
- DB\_Owner
  For a new installation, the database account must have sysadmin permissions to the databases that are created during the installation.
  If you are using an Active Directory service account for database access, you must still create a SQL account because the SynthesisSettingsManager configuration file does not work with an Active Directory database user account.
- Provide a Virtual Host Attached Storage (iSCSI SAN or Local storage) to which the designated VM host can attach.
  - All Project files are encrypted at rest and stored to the specified storage after being added to a project by a user.
  - Recommended Storage Capacity: 2TB
- Ensure that the SQL server, SAN storage server, and VM server hosting the Prysm Application Server are in the same data center.
  - The latency between VM hosting Prysm Application Server and database should be less than 5 ms.
  - The latency between VM hosting Prysm Application Server and storage should be less than 5 ms.



User and endpoint communication with the Prysm Application Server rely on an internet connection and the following DNS entries and network ports, which must be configured on the customer network and VM Host.

An internet connection is required because once each day, CHC servers communicate with the Prysm Licensing Server to verify and update new entitlements for features or user licenses.

The following are the Prysm recommended DNS entries that must be established before attempting to install or configure the Prysm Application Server:

- Prysm.{customerdomain.net}
- PrysmAdmin.{customerdomain.net}

Each of the following

- Mobile/API: HTTP/HTTPS: 80/443
- Admin: HTTPS: 4433
- RDP: 3389 (TCP/UDP) \*provides remote access to legacy On-Prem and earlier VM servers.
- SMTP: 587 (Outbound, 25 is sometimes leveraged when a customer provided SMTP relay is utilized)
- Two SQL databases within SQL Server 2012; minimum size of 2GB
  - SynthesisLocal
  - PrysmLicensing

LDAP-389/3268 should be employed wherever ActiveDirectory sign in integration will be used in the Prysm Application Suite.



Protecting client/server traffic via HTTPS requires a certificate to be applied to the Admin and API services. It is required that a customer-provided SSL certificate is applied to the configuration of each HTTPS endpoint hosted within the VM. Instructions about importing an SSL certificate are part of the installation process.



1. Verify that the Windows Region Setting is set to English. The English region setting is required.
1. Open the WebAdmin, navigate to **Settings > Controls,** and verify that the **Windows Touch Keyboard Language** text box and the **Synthesis UI Localization** text box both show English (US) as the language selection.



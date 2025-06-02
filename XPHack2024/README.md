# Malware Analysis: XPExploit_V2.1 (Discord C2 Infostealer)

## Overview  
Process Name: XPEpilotV2.1.exe  
Disguised As: "XP cheat tool"  
Distribution Method: Shared via stolen accounts of victims.
Threat Level: High  

⚠️ This is no longer an active malware sample. However, if found in the wild -  do not execute outside a controlled environment.

## Key Findings  

1. C2 Infrastructure:  
   - Primary C2: Discord webhook (hxxps://discord[.]com/api/webhooks/1213542121118900354/...)  
   - Backup C2 URL was missing from the source code I obtained.

2. Defense Evasion Techniques:  
   - Disables Windows Defender completely  
   - Adds itself to AV exclusion list  
   - Uses system file attributes to hide  

3. Data Collection:  
   - Browser data (Chrome/Edge cookies/history)  
   - Discord tokens from multiple client versions  
   - System information and process lists  

## Technical Analysis  

### Process Tree  
5488 - C:\Users\USER\Desktop\XPEpilotV2.1.exe  
   |-- 5580 - cmd.exe /c "powerShell -Command Add-MpPreference..."  
   |-- 5764 - cmd.exe /c "maina javascript:var str=new ActiveXObject..."  
   |-- 6372 - C:\Program Files\Windows Defender\MpCmdRun.exe -RemoveDefinitions -All  

### File System Changes  
Created Files:  
- C:\Users\USER\AppData\Local\Temp\Antivirus.txt  
- C:\Users\USER\AppData\Local\Temp\Chrome Cookies.txt  
- C:\Users\USER\AppData\Local\Temp\VCRUNTIME140.dll  

Modified Files:  
- Adds shortcut to Startup folder  
- Modifies registry for persistence  

## Detection  

Security Vendor | Detection Name  
--------------- | -------------  
Kaspersky       | Trojan-Spy.MSIL.Agent.affit  
ESET            | Win64/Agent.PyIntaller.R  
Malwarebytes    | Generic.Malware.Agent.IDSS  
Elastic         | Malicious (high confidence)  

## Mitigation Steps  

1. Immediate Actions:  
   - Block Discord webhook URL at firewall level  
   - Isolate affected systems  

2. Cleanup:  
   - Remove files from Temp directories  
   - Check registry Run keys for persistence  

3. Prevention:  
   - Disable PowerShell scripts execution in non-admin contexts  
   - Monitor for Windows Defender service stoppage  

## IOCs  

Type       | Value  
---------- | ------------------------------------------------------------  
MD5        | [REDACTED]  
SHA256     | [REDACTED]  
URL        | hxxps://discord[.]com/api/webhooks/1213542121118900354/...  
URL        | hxxps://www[.]upload[.]ee/files/16920215/XPExploit_V2.1.zip.html  

## Notes  

- One of many Victims: "DrumBoyNothere"  
- Distribution channels: Mass DM friends of the victim
- Likely targets: High end accounts (level, gold)  

Analysis Date: April 2024  
Status: Closed Investigation.
( ? ) Unconfirmed Threat Actor: Scared.

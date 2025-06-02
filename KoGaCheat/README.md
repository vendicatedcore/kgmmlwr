# KogaCheat Malware Analysis Report

## Overview
KogaCheat is a malicious executable (`KogaCheat.exe`) that exhibits characteristics of a Remote Access Trojan (RAT) and credential stealer. It is heavily obfuscated, requires administrative privileges, and attempts to evade detection by disabling antivirus software. [The malware has been flagged by 55/71 security vendors as malicious](https://www.virustotal.com/gui/file/b589d02731d0bc7d17c6fd2e8a46608d416001089765bcd0200cb98aaab5a67c/detection), with classifications including `Backdoor`, `Quasar RAT`, and `PasswordStealer`.

---

## Indicators of Compromise (IOCs)
- **File Hashes**:
  - `b588402731d0bc7d17c6fd2e8a466084416001089765kcdf020dc98aaab5af7c` (Client.exe)
- **File Paths**:
  - `%APPDATA%\KogaCheat\KogaCheat.exe`
  - `%USERPROFILE%\Desktop\KogaCheat.exe`
  - `C:\Users\<USER>\AppData\Roaming\KogaCheat\KogaCheat.exe`
- **Mutex**: `ba0cfc2c-fb1b-497f-817a-3422ffcbb55c`
- **Network**: Connects to `192.168.178.61:4848` (C2 server).
- **Registry**: Creates startup key `WindowsUpdaterService`.

---

## Behavioral Analysis
### Persistence Mechanisms
- Creates scheduled tasks via `schtasks.exe` to execute on logon:
  ```cmd
  schtasks /create /tn "WindowsUpdaterService" /sc ONLOGON /tr "%APPDATA%\KogaCheat\KogaCheat.exe" /rl HIGHEST /f
  ```

### Writes files to:
```%APPDATA%\KogaCheat```
```%USERPROFILE%\Desktop```
```System directories (e.g., C:\Windows\System32\Tasks).```

---

# Defense Evasion

   - Deletes Zone Identifier Alternate Data Stream (ADS) to bypass security restrictions.
   - Obfuscated code and long sleep intervals to evade sandbox analysis.

## Credential Theft

Matches rules for ``PasswordStealer`` and ``Keylogger`` behavior (e.g., M``SIL/Spy.Keylogger.DQJ``).

## Network Activity

  - Communicates with a C2 server using a hardcoded IP and port (192.168.178.61:4848).
  - Uses a server certificate for encrypted communication:
  ```
ServerCertificate: MIIE9DCCAtygAwIBAgIQAIbeLrrgfW4Da/BensFmmzANBgkqhkiG9w0BAQ0FADAbMRkwFwYDVQQDDBBRdWFzYXIgU2VydmVyIENBMCAXDTIyMTEzMDE5MDQwOFoYDzk5OTkxMjMxMjM1OTU5WjAbMRkwFwYDVQQDDBBRdWFzYXIgU2VydmVyIENBMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAqNJfXdy+Vz2WMrFAC4bLGIw6VfUp5lDy9KRVX0mTuYzfzq1jiyzZ+rbbokGtSd6inONFpIuZbQF+qQI+kj+YZjthgGIruT9QTx1ebeOnG5Yd0btgswXXeAiluljAuvTZXVbsQKaPjnSR3VdYUaApCH8ukKfH8TZLgk46jhnB7K2KO3irXmBCR81A4E/Xm0hivwt7wPEm39HLhEeft62sBtmb88JBiGAlGvOzFOGqJy4yg3gf5sa8PbWkZv9Z4+uoSTvCGFuB47nehgXCi1IBTOLs5rd69mDQ8ncYd+gro9wDEu8Sb8ejdiBh+cnC3H5XTKCsx7qBvo29qoZh6lPlNhkmrhL2kWGMXdGn3tFiRHKM05XNSVCaznZ2E3oDLt2VT3LmRlOXca9351qIbTTjBfAhwtrdvxzw1KwOjzy26PJBjgHZbFgC0THy/zDqibN1SxvGVIFoudiV/lxSBKiv61LzV27JetM8i7dvT+tE9sfhb+tyjSnGYPk8XFQiAv64wkKxR2NDqZiKwTg7p7s5ky+LZ2/O3/UQ/ieXHWQfKvR0Jri/DtYTVCGVQxF7BqF8DcPD7tAibpu+UgNyk0GwZEq9+1EIroqt9oUKenJ7TW+4GFSH12Z097aJH6yydaocvq89OxyGBnrM80TjentIf5d1woJNBkUWfcArzjdFVFMCAwEAAaMyMDAwHQYDVR0OBBYEFBd1pEok1LFmQOAW+GdJwmBnrfDqMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQENBQADggIBADkINLYpJrX6t9twYDvpzAiAGVbi2Y4lDqGWd9aB6kGchmtw3D/VCYhrTXfxybVraDQxjosHA3TSLBvN47+VjN3t6GT191xinM6fl0I0CzQpjASA8s7DTd/H5jc2kM9uFwoRXaPCchRu1DL5GCsmVZOQj1Z5VbuXOca7MVSnesQdg1pdHLJ4ds8Sm1jz14OFhmI2az2WwbAWiFzvjsrMu24vpduqhhQB+TpHvrfDmN++GQ5CBDWNTJxta8wCcYzG92b7yUv3OEyJoXcNRYl+bVnDZEbqVaIpDkQEV2sQurWkX1dija5WOvZ1xx6ITIEOdriTKN2XAFvVSv6BqWH4rumjBAeCQOMK8JWTHrgZ3qUMPFRYtLQsKJYF/IQwhn2lQ5D3KqZfvGXDjdymNV1DpoN9IH34yCW3TVUB1NnWwk222fXGCuoBgF24UvdfV+TfhXQgjaBTk/3IdsSxcGCf1cY85fnfNPPgse6WO5GJe7hHBuMYS1f9M4QV9XgRgD5xzqs+lP5VP4xaa6JzHrz7OY/RTnmgJA2VRFKL5uD+kOeUl+CSHVVICyYpF1sborAwUluPrLESHOFt/w57dJegJgyHlGa8Br9LYktpJWveBsyOMCbK4OxW3DlGv3AXo0ATyAcqAfbDVliEfdbQDVMI2rbi+YHBR5a2IYOrdWVRRkYI
```

---

## Detection Rules Matched


  - Sigma Rules:
```
        Scheduled TaskCache Change by Uncommon Program
        Suspicious Schtasks Schedule Type With High Privileges
        ADS Zone Identifier Deleted By Uncommon Application
        Schedule Task Creation From Suspicious Path
```

---

## Mitigation Recommendations

  1. Isolate and Quarantine: Immediately isolate affected systems.

  2. Remove Persistence:

        Delete scheduled task: WindowsUpdaterService.

        Remove files from %APPDATA%\KogaCheat and %USERPROFILE%\Desktop.

  3. Network Blocking: Block C2 communication to 192.168.178.61:4848.

  4. Endpoint Detection: Deploy rules to detect:

        Uncommon schtasks usage.

        Deletion of Zone Identifier ADS.

  5. User Awareness: Warn against executing files that require antivirus disabling.

---

### Process Tree
- **Parent Process**: Typically executed via user-initiated action (e.g., double-clicking `KogaCheat.exe` from Desktop).
- **Child Processes**:
  - `conhost.exe` (multiple instances with obfuscated arguments).
  - `schtasks.exe` (creates persistence).
  - `wmiprvse.exe` (WMI abuse for lateral movement).
  - `taskhostw.exe` (registers malicious tasks).


## Network Analysis
### C2 Communication
- **Protocol**: Likely HTTPS (evidenced by server certificate).
- **Payload**: Encrypted with hardcoded RSA public key (see `ServerSignature` in config).
- **Beaconing**: Periodic check-ins to `192.168.178.61:4848`.

### Server Certificate
- **Issuer**: "Quasar Server CA" (self-signed).
- **Validity**: 2022-11-30 to 9999-12-31 (invalid long-term certificate).

---

## Configuration Data
Extracted from malware payload:
```json
{
"Version": "1.4.0",
"Host:Port": "192.168.178.61:4848",
"MutexName": "ba0cfc2c-fb1b-497f-817a-3422ffcbb55c",
"StartupKey": "WindowsUpdaterService",
"LogDirectory": "Logs"
}
```

## Detection Signatures

- YARA Rule
```yara
rule KogaCheat_RAT {
   meta:
      description = "Detects KogaCheat RAT payload"
      author = "Your Name"
      date = "2023-01-01"
   strings:
      $mutex = "ba0cfc2c-fb1b-497f-817a-3422ffcbb55c"
      $server = "192.168.178.61:4848"
      $task = "WindowsUpdaterService"
   condition:
      any of them
}
```
--- 

# Disclaimer
This analysis is based on observed behavior in a controlled environment. Actual payloads may vary across campaigns. Always verify IOCs in your environment. <br>
Threat Actor: AN ITALIAN GAMER <br>
Sample has been taken down.

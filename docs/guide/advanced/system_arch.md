---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 13
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---


# OpenList System Architecture Reference

| Filename | Operating System | CPU Architecture | Description |
|----------|------------------|------------------|-------------|
| openlist-android-386.tar.gz | Android | 32-bit x86 | For 32-bit x86 Android devices |
| openlist-android-amd64.tar.gz | Android | 64-bit x86 | For 64-bit x86 Android devices |
| openlist-android-arm.tar.gz | Android | 32-bit ARM | For 32-bit ARM Android devices |
| openlist-android-arm64.tar.gz | Android | 64-bit ARM | For 64-bit ARM Android devices |
| openlist-darwin-amd64.tar.gz | macOS | 64-bit Intel | For Intel-based Macs |
| openlist-darwin-arm64.tar.gz | macOS | 64-bit Apple Silicon | For Apple Silicon Macs |
| openlist-freebsd-amd64.tar.gz | FreeBSD | 64-bit x86 | For 64-bit x86 FreeBSD systems |
| openlist-freebsd-arm64.tar.gz | FreeBSD | 64-bit ARM | For 64-bit ARM FreeBSD systems |
| openlist-freebsd-i386.tar.gz | FreeBSD | 32-bit x86 | For 32-bit x86 FreeBSD systems |
| openlist-linux-386.tar.gz | Linux | 32-bit x86 | For 32-bit x86 Linux systems |
| openlist-linux-amd64.tar.gz | Linux | 64-bit x86 | For 64-bit x86 Linux systems |
| openlist-linux-arm-5.tar.gz | Linux | 32-bit ARM v5 | For ARM v5 Linux systems |
| openlist-linux-arm-6.tar.gz | Linux | 32-bit ARM v6 | For ARM v6 Linux systems |
| openlist-linux-arm-7.tar.gz | Linux | 32-bit ARM v7 | For ARM v7 Linux systems |
| openlist-linux-arm64.tar.gz | Linux | 64-bit ARM | For 64-bit ARM Linux systems |
| openlist-linux-mips.tar.gz | Linux | MIPS | For MIPS Linux systems |
| openlist-linux-mips64.tar.gz | Linux | MIPS64 | For MIPS64 Linux systems |
| openlist-linux-mips64le.tar.gz | Linux | MIPS64LE | For little-endian MIPS64 Linux systems |
| openlist-linux-mipsle.tar.gz | Linux | MIPSLE | For little-endian MIPS Linux systems |
| openlist-linux-musl-amd64.tar.gz | Linux (musl) | 64-bit x86 | For 64-bit x86 Linux systems with musl libc |
| openlist-linux-musl-arm64.tar.gz | Linux (musl) | 64-bit ARM | For 64-bit ARM Linux systems with musl libc |
| openlist-linux-musl-mips.tar.gz | Linux (musl) | MIPS | For MIPS Linux systems with musl libc |
| openlist-linux-musl-mips64.tar.gz | Linux (musl) | MIPS64 | For MIPS64 Linux systems with musl libc |
| openlist-linux-musl-mips64le.tar.gz | Linux (musl) | MIPS64LE | For little-endian MIPS64 Linux systems with musl libc |
| openlist-linux-musl-mipsle.tar.gz | Linux (musl) | MIPSLE | For little-endian MIPS Linux systems with musl libc |
| openlist-linux-musl-ppc64le.tar.gz | Linux (musl) | 64-bit PowerPC LE | For little-endian PowerPC Linux systems with musl libc |
| openlist-linux-musl-s390x.tar.gz | Linux (musl) | IBM z/Architecture | For IBM z/Architecture Linux systems with musl libc |
| openlist-linux-musleabi-arm.tar.gz | Linux (musl) | 32-bit ARM EABI | For 32-bit ARM EABI Linux systems with musl libc |
| openlist-linux-musleabi-armel.tar.gz | Linux (musl) | 32-bit ARM EABI LE | For little-endian 32-bit ARM EABI Linux systems with musl libc |
| openlist-linux-musleabi-armv5l.tar.gz | Linux (musl) | 32-bit ARM v5 EABI | For ARM v5 EABI Linux systems with musl libc |
| openlist-linux-musleabi-armv6.tar.gz | Linux (musl) | 32-bit ARM v6 EABI | For ARM v6 EABI Linux systems with musl libc |
| openlist-linux-musleabi-armv7m.tar.gz | Linux (musl) | 32-bit ARM v7 EABI | For ARM v7 EABI Linux systems with musl libc |
| openlist-linux-musleabihf-arm.tar.gz | Linux (musl) | 32-bit ARM EABI HF | For 32-bit ARM hard-float EABI Linux systems with musl libc |
| openlist-linux-musleabihf-armel.tar.gz | Linux (musl) | 32-bit ARM EABI HF LE | For little-endian 32-bit ARM hard-float EABI Linux systems with musl libc |
| openlist-linux-musleabihf-armv5l.tar.gz | Linux (musl) | 32-bit ARM v5 EABI HF | For ARM v5 hard-float EABI Linux systems with musl libc |
| openlist-linux-musleabihf-armv6.tar.gz | Linux (musl) | 32-bit ARM v6 EABI HF | For ARM v6 hard-float EABI Linux systems with musl libc |
| openlist-linux-musleabihf-armv7l.tar.gz | Linux (musl) | 32-bit ARM v7 EABI HF | For ARM v7 hard-float EABI Linux systems with musl libc |
| openlist-linux-musleabihf-armv7r.tar.gz | Linux (musl) | 32-bit ARM v7 EABI HF | For ARM v7 hard-float EABI Linux systems with musl libc |
| openlist-linux-ppc64le.tar.gz | Linux | 64-bit PowerPC LE | For little-endian PowerPC Linux systems |
| openlist-linux-riscv64.tar.gz | Linux | 64-bit RISC-V | For 64-bit RISC-V Linux systems |
| openlist-linux-s390x.tar.gz | Linux | IBM z/Architecture | For IBM z/Architecture Linux systems |
| openlist-windows-386.zip | Windows | 32-bit x86 | For 32-bit x86 Windows systems |
| openlist-windows-amd64-upx.zip | Windows | 64-bit x86 | UPX-compressed version for 64-bit x86 Windows |
| openlist-windows-amd64.zip | Windows | 64-bit x86 | For 64-bit x86 Windows systems |
| openlist-windows-arm64.zip | Windows | 64-bit ARM | For 64-bit ARM Windows systems |

<br/>



## **Android install OpenList**

There are three ways to choose based on your needs

1. Using **https://github.com/jing332/AListFlutter**
2. Using **https://github.com/LeoHaoVIP/AListLiteAndroid**
3. Use `termux` to run
- Reference: **https://anwen-anyi.github.io/index/14-android_install.html**

<i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> Note: Remember to authorize the APP, set the background running and battery saving policy to unlimited, otherwise it may be killed in the background, causing it to be suddenly interrupted and unusable during background use.

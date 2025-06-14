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
| alist-android-386.tar.gz | Android | 32-bit x86 | For 32-bit x86 Android devices |
| alist-android-amd64.tar.gz | Android | 64-bit x86 | For 64-bit x86 Android devices |
| alist-android-arm.tar.gz | Android | 32-bit ARM | For 32-bit ARM Android devices |
| alist-android-arm64.tar.gz | Android | 64-bit ARM | For 64-bit ARM Android devices |
| alist-darwin-amd64.tar.gz | macOS | 64-bit Intel | For Intel-based Macs |
| alist-darwin-arm64.tar.gz | macOS | 64-bit Apple Silicon | For Apple Silicon Macs |
| alist-freebsd-amd64.tar.gz | FreeBSD | 64-bit x86 | For 64-bit x86 FreeBSD systems |
| alist-freebsd-arm64.tar.gz | FreeBSD | 64-bit ARM | For 64-bit ARM FreeBSD systems |
| alist-freebsd-i386.tar.gz | FreeBSD | 32-bit x86 | For 32-bit x86 FreeBSD systems |
| alist-linux-386.tar.gz | Linux | 32-bit x86 | For 32-bit x86 Linux systems |
| alist-linux-amd64.tar.gz | Linux | 64-bit x86 | For 64-bit x86 Linux systems |
| alist-linux-arm-5.tar.gz | Linux | 32-bit ARM v5 | For ARM v5 Linux systems |
| alist-linux-arm-6.tar.gz | Linux | 32-bit ARM v6 | For ARM v6 Linux systems |
| alist-linux-arm-7.tar.gz | Linux | 32-bit ARM v7 | For ARM v7 Linux systems |
| alist-linux-arm64.tar.gz | Linux | 64-bit ARM | For 64-bit ARM Linux systems |
| alist-linux-mips.tar.gz | Linux | MIPS | For MIPS Linux systems |
| alist-linux-mips64.tar.gz | Linux | MIPS64 | For MIPS64 Linux systems |
| alist-linux-mips64le.tar.gz | Linux | MIPS64LE | For little-endian MIPS64 Linux systems |
| alist-linux-mipsle.tar.gz | Linux | MIPSLE | For little-endian MIPS Linux systems |
| alist-linux-musl-amd64.tar.gz | Linux (musl) | 64-bit x86 | For 64-bit x86 Linux systems with musl libc |
| alist-linux-musl-arm64.tar.gz | Linux (musl) | 64-bit ARM | For 64-bit ARM Linux systems with musl libc |
| alist-linux-musl-mips.tar.gz | Linux (musl) | MIPS | For MIPS Linux systems with musl libc |
| alist-linux-musl-mips64.tar.gz | Linux (musl) | MIPS64 | For MIPS64 Linux systems with musl libc |
| alist-linux-musl-mips64le.tar.gz | Linux (musl) | MIPS64LE | For little-endian MIPS64 Linux systems with musl libc |
| alist-linux-musl-mipsle.tar.gz | Linux (musl) | MIPSLE | For little-endian MIPS Linux systems with musl libc |
| alist-linux-musl-ppc64le.tar.gz | Linux (musl) | 64-bit PowerPC LE | For little-endian PowerPC Linux systems with musl libc |
| alist-linux-musl-s390x.tar.gz | Linux (musl) | IBM z/Architecture | For IBM z/Architecture Linux systems with musl libc |
| alist-linux-musleabi-arm.tar.gz | Linux (musl) | 32-bit ARM EABI | For 32-bit ARM EABI Linux systems with musl libc |
| alist-linux-musleabi-armel.tar.gz | Linux (musl) | 32-bit ARM EABI LE | For little-endian 32-bit ARM EABI Linux systems with musl libc |
| alist-linux-musleabi-armv5l.tar.gz | Linux (musl) | 32-bit ARM v5 EABI | For ARM v5 EABI Linux systems with musl libc |
| alist-linux-musleabi-armv6.tar.gz | Linux (musl) | 32-bit ARM v6 EABI | For ARM v6 EABI Linux systems with musl libc |
| alist-linux-musleabi-armv7m.tar.gz | Linux (musl) | 32-bit ARM v7 EABI | For ARM v7 EABI Linux systems with musl libc |
| alist-linux-musleabihf-arm.tar.gz | Linux (musl) | 32-bit ARM EABI HF | For 32-bit ARM hard-float EABI Linux systems with musl libc |
| alist-linux-musleabihf-armel.tar.gz | Linux (musl) | 32-bit ARM EABI HF LE | For little-endian 32-bit ARM hard-float EABI Linux systems with musl libc |
| alist-linux-musleabihf-armv5l.tar.gz | Linux (musl) | 32-bit ARM v5 EABI HF | For ARM v5 hard-float EABI Linux systems with musl libc |
| alist-linux-musleabihf-armv6.tar.gz | Linux (musl) | 32-bit ARM v6 EABI HF | For ARM v6 hard-float EABI Linux systems with musl libc |
| alist-linux-musleabihf-armv7l.tar.gz | Linux (musl) | 32-bit ARM v7 EABI HF | For ARM v7 hard-float EABI Linux systems with musl libc |
| alist-linux-musleabihf-armv7r.tar.gz | Linux (musl) | 32-bit ARM v7 EABI HF | For ARM v7 hard-float EABI Linux systems with musl libc |
| alist-linux-ppc64le.tar.gz | Linux | 64-bit PowerPC LE | For little-endian PowerPC Linux systems |
| alist-linux-riscv64.tar.gz | Linux | 64-bit RISC-V | For 64-bit RISC-V Linux systems |
| alist-linux-s390x.tar.gz | Linux | IBM z/Architecture | For IBM z/Architecture Linux systems |
| alist-windows-386.zip | Windows | 32-bit x86 | For 32-bit x86 Windows systems |
| alist-windows-amd64-upx.zip | Windows | 64-bit x86 | UPX-compressed version for 64-bit x86 Windows |
| alist-windows-amd64.zip | Windows | 64-bit x86 | For 64-bit x86 Windows systems |
| alist-windows-arm64.zip | Windows | 64-bit ARM | For 64-bit ARM Windows systems |

<br/>



## **Android install OpenList**

There are two ways to choose based on your needs

1. Using **https://github.com/jing332/AListFlutter**
2. Use `termux` to run
- Reference: **https://anwen-anyi.github.io/index/14-android_install.html**

<i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> Note: Remember to authorize the APP, set the background running and battery saving policy to unlimited, otherwise it may be killed in the background, causing it to be suddenly interrupted and unusable during background use.

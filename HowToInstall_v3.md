#summary 如何安裝Helianthus.Annuus v3
#labels Deprecated

| **官方元件** | **是否必要** | **最新版本** | **下載地址** | |
|:---------|:---------|:---------|:---------|:|
| Libraries | T        | 3.0.4    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.lib.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.lib.opera.js) |
| Kernel   | T        | 3.4.6    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.kernel.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.kernel.opera.js) |
| User Interface | F        | 3.2.7    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.ui.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.ui.opera.js) |
| Main Script | F        | 3.6.7    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.main.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.main.opera.js) |
| Layout Designer | F        | 3.3.2    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.layout.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.layout.opera.js) |
| Style Editor | F        | 3.1.3    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.style.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.style.opera.js) |
| Comonents Redesigner | F        | 3.2.3    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.redesign.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.redesign.opera.js) |
| AJAX Integrator | F        | 3.4.2    | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.ajax.user.js) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.ajax.opera.js) |
| Rubbish Remover | F        | 3.0.0    | N/A      | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.rubbish.opera.js) |
| 打包下載     | N/A      | N/A      | [user](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/user/an.all.user.zip) | [opera](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/opera/an.all.opera.zip) |

注1: user與opera內容完全相同, 唯一的分別是檔案名稱不同<br />
注2: 以上所有檔案皆屬於最新穩定版, 若想使用beta/nightly版本請參考[此處](NotesOnNightly.md)


---


| **瀏覽器** | **所需插件/軟件** | **user** | **opera** |
|:--------|:------------|:---------|:----------|
| Maxthon 2 (w/ IE8) | 內建          | O        | X         |
| Firefox 3 | [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/748/) | O        | X         |
| Google Chrome(Win) 1+ | [Greasemetal](http://greasemetal.31tools.com/) | O        | X         |
| Google Chrome 2+ | 內建          | O        | X         |
| Opera 9+ | 內建          | X        | O         |
| ~~Internet Explorer 8~~ | ~~[IE7Pro](http://www.ie7pro.com/)~~ | X        | X         |
| Safari(Mac) 3+ | [GreaseKit](http://8-p.info/greasekit/) | O        | X         |
| 任何與以上內核相同或更新之瀏覽器 | [Privoxy](http://www.privoxy.org/) | O        | O         |
| 任何與以上內核相同或更新之瀏覽器 | 任何可動態修改HTML之軟件(eg. Proxomitron) | O        | O         |

| **瀏覽器/軟件** | **額外元件** | **是否必要** | **最新版本** |
|:-----------|:---------|:---------|:---------|
| Maxthon 2  | [Helianthus.Annuus: M2 Filter](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/m2filter/an.m2filter.m2f) | T        | 3.2.1    |
| Firefox 3  | [Helianthus.Annuus: Adblock Plus Filter List](http://helianthus-annuus.googlecode.com/svn/other/an.adblockplus.txt) | F        | N/A      |
| Chrome 3+  | [Helianthus.Annuus: Scripts Injector](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/inject/an.inject.user.js) | T        | 3.1.0    |
| Privoxy    | [Helianthus.Annuus: Privoxy Filters](http://helianthus-annuus.googlecode.com/svn/tags/v3/LASTEST/privoxy/an.privoxy.zip) | T        | 3.1.0    |


---

<h1>安裝方法</h1>



---


# Maxthon 2 (w/ IE8) #

  * 安裝Helianthus.Annuus: Filter
  * 正常來說Maxthon 2會自動詢問是否安裝, 如沒有請下載該過濾包並將其拖放至Maxthon 2視窗
  * 下載js元件移至:
    * %Maxthon的安裝位置%\Filter\Helianthus.Annuus\Scripts
    * (預設位置為 C:\Program Files\Maxthon2\Filter\Helianthus.Annuus\Scripts)
  * 跟據下圖指示啟用Helianthus.Annuus: Filter
> ![http://helianthus-annuus.googlecode.com/svn/site/howtoinstall_m2_1.png](http://helianthus-annuus.googlecode.com/svn/site/howtoinstall_m2_1.png)

> ![http://helianthus-annuus.googlecode.com/svn/site/howtoinstall_m2_2.png](http://helianthus-annuus.googlecode.com/svn/site/howtoinstall_m2_2.png)

Helianthus.Annuus: Filter同時提供額外功能, 用戶可自行選擇是否啟用:

| **功能** | **預設啟用** |
|:-------|:---------|
| 啟用IE8標準模式及修正部份顯示錯誤 | T        |
| 移除垃圾   | T        |
| 移除Bookmark Bar (可加快網頁載入) | T        |
| 快取圖片   | T        |


---


# Firefox 3 w/ Greasemonkey #

  * 安裝Greasemonkey
  * 重新啟動Firefox
  * 左鍵點擊js元件以進行安裝

另外, 用戶可使用Adblock plus 配合 Helianthus.Annuus: Adblock Plus filter list使運行更快:
  * 跟據下圖指示加入filter list
> ![http://helianthus-annuus.googlecode.com/svn/site/rubbishremover_01.png](http://helianthus-annuus.googlecode.com/svn/site/rubbishremover_01.png)

> ![http://helianthus-annuus.googlecode.com/svn/site/rubbishremover_02.png](http://helianthus-annuus.googlecode.com/svn/site/rubbishremover_02.png)

> 位址請填 `http://helianthus-annuus.googlecode.com/svn/other/an.adblockplus.txt`


---


# Google Chrome(Win) 1+ w/ Greasemetal #

  * 安裝Greasemetal.
  * 下載js元件至:
    * XP: 我的文件\userjs
    * Vista/Win7: 文件\userjs
  * 於開始選單啟動Greasemetal (以後若想使用Helianthus.Annuus必須透過Greasemetal啟動Google Chrome)


---


# Google Chrome 2+ #

## `*** 注意: 自Google Chrome 3開始, 請直接使用Scripts Injector, 不要使用其他元件 ***` ##

  * http://dev.chromium.org/developers/design-documents/user-scripts
  * 於以下位置建立文件夾 - User Scripts:
    * XP: C:\Documents and Settings\`<username>`\Local Settings\Application Data\Google\Chrome\User Data\Default
    * Vista/Win7: C:\Users\`<username>`\AppData\Local\Google\Chrome\User Data\Default
  * 下載js元件至User Scripts文件夾
  * 以--enable-user-scripts命令行參數啟動Google Chrome
  * 以下為較常見之方法:
> ![http://helianthus-annuus.googlecode.com/svn/site/howtoinstall_chrome2_1.png](http://helianthus-annuus.googlecode.com/svn/site/howtoinstall_chrome2_1.png)


---


# Opera 9+ #

  * 請先於任何一處開設一個文件夾用作儲存user scripts (例如C:\userjs).
  * 下載js元件至該文件夾
  * 於以下選項選擇該文件夾:
    * 英文: Tools -> Preferences -> Advanced -> Content -> JavaScript Options -> My JavaScript files
    * 中文: 工具 -> 功能設定 -> 進階 -> 內容 -> JavaScript 選項 -> 使用者 JavaScript 檔案

另外, 用戶可參考[此處](http://userjs.org/help/resources/toggle-user-javascript)了解如何加入user scripts開關按扭


---


# Internet Explorer 8 w/ IE7Pro #

  * (暫時停止支持, 詳情: http://forum1.hkgolden.com/view.aspx?message=1705086)
  * 安裝IE7Pro
  * 右擊IE7Pro圖示 -> 喜好設定 -> 使用者指令碼 -> 啟用使用者指令碼 -> 確定
  * 左鍵點擊js元件以進行安裝


---


# Safari(Mac) 3+ w/ Greasekit #

  * 由於作者沒有Mac OS, 所以無法測試, 請曾嘗試的用戶回報能否使用, 謝謝


---


# 任何瀏覽器 w/ Privoxy #

  * (本教學已假設閣下對Privoxy有基本認識)
  * 下載Helianthus.Annuus: Privoxy Filters並解壓到Privoxy主目錄
  * 於config.txt加入以下兩行:
    * actionsfile an.privoxy.action
    * filterfile an.privoxy.filter


---

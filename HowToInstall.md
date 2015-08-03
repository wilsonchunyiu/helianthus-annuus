#summary 如何安裝Helianthus.annuus v3.5+
#labels Phase-Deploy

**請注意: 作者不會於本頁之評語區作任何回覆, 如有問題請參考[聯絡方法](AboutAuthor.md)**

| **相關瀏覽器/插件/軟件** | **stable** | **beta** |
|:----------------|:-----------|:---------|
| Firefox 7+      | [annuus.xpi](http://helianthus-annuus.googlecode.com/svn/dist/v3/stable/annuus.xpi) | [annuus.xpi](http://helianthus-annuus.googlecode.com/svn/dist/v3/beta/annuus.xpi) |
| Google Chrome / Chromium | [chrome web store](https://chrome.google.com/webstore/detail/helianthusannuus/gelkllafbnhilefggkgjgjanooclhddn) |          |
| Opera 15+       | [annuus.crx](http://helianthus-annuus.googlecode.com/svn/dist/v3/stable/annuus.crx) | [annuus.crx](http://helianthus-annuus.googlecode.com/svn/dist/v3/beta/annuus.crx) |
| Opera 11/12     | [annuus.oex](http://helianthus-annuus.googlecode.com/svn/dist/v3/stable/annuus.oex) | [annuus.oex](http://helianthus-annuus.googlecode.com/svn/dist/v3/beta/annuus.oex) |
| Safari 5.1+     | [annuus.safariextz](http://helianthus-annuus.googlecode.com/svn/dist/v3/stable/annuus.safariextz) |          |
| Maxthon 3+      | [annuus.mxaddon](http://helianthus-annuus.googlecode.com/svn/dist/v3/stable/annuus.mxaddon) | [annuus.mxaddon](http://helianthus-annuus.googlecode.com/svn/dist/v3/beta/annuus.mxaddon) |
| User Script     | [annuus.user.js](http://helianthus-annuus.googlecode.com/svn/dist/v3/stable/annuus.user.js) | [annuus.user.js](http://helianthus-annuus.googlecode.com/svn/dist/v3/beta/annuus.user.js) |
| Privoxy         | [annuus.privoxy.zip](http://helianthus-annuus.googlecode.com/svn/dist/v3/stable/annuus.privoxy.zip) | [annuus.privoxy.zip](http://helianthus-annuus.googlecode.com/svn/dist/v3/beta/annuus.privoxy.zip) |


---


## Maxthon 3+ ##

  * 下載並開啟annuus.mxaddon
  * 若無法開啟, 請將其拖放至Maxthon 3視窗以進行安裝


---


## 任何瀏覽器(如IE8) w/ Privoxy ##

  * (本教學已假設閣下對[Privoxy](http://www.privoxy.org/)有基本認識)
  * 下載annuus.privoxy.zip並解壓到Privoxy主目錄
  * 於config.txt加入以下兩行:
    * actionsfile annuus.action
    * filterfile annuus.filter


---

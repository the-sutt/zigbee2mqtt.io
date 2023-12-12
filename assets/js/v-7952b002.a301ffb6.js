"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15743],{465920:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-7952b002","path":"/devices/WDE002906.html","title":"Schneider Electric WDE002906 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric WDE002906 control via MQTT","description":"Integrate your Schneider Electric WDE002906 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"Mode change","slug":"mode-change","link":"#mode-change","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702406755000},"filePathRelative":"devices/WDE002906.md"}')},581225:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var n=i(166252);const a=(0,n._)("h1",{id:"schneider-electric-wde002906",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#schneider-electric-wde002906","aria-hidden":"true"},"#"),(0,n.Uk)(" Schneider Electric WDE002906")],-1),o=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"WDE002906")],-1),l=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Wiser wireless switch 1-gang or 2-gang")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"action, battery, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WDE002906.jpg",alt:"Schneider Electric WDE002906"})])],-1),h=(0,n._)("h2",{id:"pairing",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),u=(0,n._)("p",null,"Factory reset the wireless switch by tapping the top right button 3 times and hold it for 10 seconds after a fourth press (the LED in the center starts blinking red). To change the connection mode from bluetooth to zigbee hold the button for 20 seconds instead of 10 seconds (red LED blinks faster)",-1),p=(0,n._)("p",null,"To initiate pairing press the upper right button 3 times. When it starts blinking orange it is in the zigbee connection mode. When it is blinking red and green it in the bluetooth connection mode.",-1),g=(0,n._)("h2",{id:"mode-change",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#mode-change","aria-hidden":"true"},"#"),(0,n.Uk)(" Mode change")],-1),m=(0,n._)("p",null,"It is possible to change from 1-gang and 2-gang. To achieve this press the top left and bottom right button for 10 seconds (2 LEDs on the left and right start blinking).",-1),b=(0,n._)("p",null,"To change to 1-gang a factory reset is needed.",-1),_=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),v=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_left</code>, <code>off_left</code>, <code>on_right</code>, <code>off_right</code>, <code>brightness_move_up_left</code>, <code>brightness_stop_left</code>, <code>brightness_move_down_left</code>, <code>brightness_stop_left</code>, <code>brightness_move_up_right</code>, <code>brightness_stop_right</code>, <code>brightness_move_down_right</code>, <code>brightness_stop_right</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),f={},k=(0,i(983744).Z)(f,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[o,(0,n._)("tbody",null,[s,(0,n._)("tr",null,[l,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,n.w5)((()=>[(0,n.Uk)("Schneider Electric")])),_:1})])]),d,r,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,u,p,g,m,b,(0,n.kq)(" Notes END: Do not edit below this line "),_,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);
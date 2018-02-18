<template>
  <div class="content installers">
    <h2>Sold and installed in:<hr/></h2>
    <h3>
      <p>New York: <span class="name">William Merchant</span>:</p>
      <a href="http://www.merchantbass.com" target="_blank">www.merchantbass.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(0)">map</a>
    </h3>
    <h3>
      <p>New York: <span class="name">Samuel Kolstein &amp; Son, Ltd Violinmakers</span>:&nbsp;&nbsp;</p>
      <a href="http://www.kolstein.com/" target="_blank">www.kolstein.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(27)">map</a>
    </h3>
    <h3>
      <p>Boston: <span class="name">Dennis Roy</span>, member of the Boston Symphony Orchestra:</p>
      <a href="http://www.droysbassment.com" target="_blank">www.droysbassment.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(1)">map</a>
    </h3>
    <h3>
      <p>Santa Cruz: <span class="name">Matt Bohn, "the Bass Doctor"</span>:</p>
      <a href="http://www.thebassdoc.com" target="_blank">www.thebassdoc.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(2)">map</a>
    </h3>
    <h3>
      <p>Australia: <span class="name">BassWorks</span></p>
      <A href="http://www.bassworks.com.au" target="_blank">www.bassworks.com.au</A>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(3)">map</a>
    </h3>
    <h3>
      <p>Northern Virginia: <span class="name">Thomas Andres Bass Makers</span></p>
      <a href="http://www.lowstrings.com" target="_blank">www.lowstrings.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(4)">map</a>
    </h3>
    <h3>
      <p>New Jersey: <span class="name">JD Hill Music</span></p>
      <a href="http://www.jdhillmusic.com" target="_blank">www.jdhillmusic.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(5)">map</a>
    </h3>
    <h3>
      <p>Italy: <span class="name">Felix Habel</span></p>
      <a href="http://www.cetvs.com" target="_blank">www.cetvs.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(6)">map</a>
    </h3>
    <h3>
      <p>Galway, Ireland and Seattle, Washington: <span class="name">Tom Barrett, The DoubleBass Shop</span></p>
      <a href="http://doublebassireland.com" target="_blank">www.doublebassireland.com</a>&nbsp;&nbsp;
    </h3>
    <h3>
      <p>Minnesota: <span class="name">David Folland, Violin Maker</span></p>
      <a href="http://www.follandviolins.com/" target="_blank">www.follandviolins.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(7)">map</a>
    </h3>
    <h3>
      <p>Arizona: <span class="name">Andrew's Fine Violins</span></p>
      <a href="http://www.andrewsfineviolins.com" target="_blank">www.andrewsfineviolins.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(8)">map</a>
    </h3>
    <h3>
      <p>British Columbia: <span class="name">James Ham</span></p>
      <a href="http://www.hamstringsmusic.com" target="_blank">www.hamstringsmusic.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(9)">map</a>
    </h3>
    <h3>
      <p>Toronto: <span class="name">George Heinl &amp; Co. Limited</span></p>
      <a href="http://www.georgeheinl.com" target="_blank">www.georgeheinl.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(11)">map</a>
    </h3>
    <h3>
      <p>Cologne, Germany: <span class="name">Daniel J. Kress, Geigenbaumeister</span></p>
      <a href="http://www.geigenbau-kress.de" target="_blank">www.geigenbau-kress.de</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(12)">map</a>
    </h3>
    <h3>
      <p>Melbourne, Australia: <span class="name">Benedict G Puglisi, Atelier Puglisi</span></p>
      <a href="http://www.atelierpuglisi.com" target="_blank">www.atelierpuglisi.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(13)">map</a>
    </h3>
    <h3>
      <p>South Jersey: <span class="name">Riccardi's Violin Shop</span></p>
      <a href="http://www.riccardisviolinshop.com" target="_blank">www.riccardisviolinshop.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(14)">map</a>
    </h3>
    <h3>
      <p>Northern Michigan: <span class="name">Ken McKay, Up North Strings</span></p>
      <a href="http://www.upnorthstrings.com" target="_blank">www.upnorthstrings.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(15)">map</a>
    </h3>
    <h3>
      <p>Rio de Janeiro: <span class="name">Andrea Spada</span></p>
      <a href="http://www.andreaspada.com.br" target="_blank">www.andreaspada.com.br</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(16)">map</a>
    </h3>
    <h3>
      <p>Connecticut: <span class="name">Upton Bass</span></p>
      <a href="http://www.uptonbass.com" target="_blank">www.uptonbass.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(17)">map</a>
    </h3>
    <h3>
      <p>Boston: <span class="name">Upton Bass</span></p>
      <a href="http://www.uptonbass.com" target="_blank">www.uptonbass.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(18)">map</a>
    </h3>
    <h3>
      <p>M&uuml;nchweier, Germany: <span class="name">Stefan Krattenmacher</span></p>
      <a href="http://www.krattenmacher.com" target="_blank">www.krattenmacher.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(19)">map</a>
    </h3>
    <h3>
      <p>Besan&ccedil;on France: <span class="name">Maurice Beaufort</span></p>
      <a href="http://www.beaufortluthier.com" target="_blank">www.beaufortluthier.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(20)">map</a>
    </h3>
    <h3>
      <p>Milan, Tennessee: <span class="name">Wayne Holmes</span></p>
      <a href="http://www.holmesbassviol.com" target="_blank">www.holmesbassviol.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(21)">map</a>
    </h3>
    <h3>
      <p>Arnhem, The Netherlands: <span class="name">Adrian Martig</span></p>
      <a href="http://www.martigvioolservice.nl" target="_blank">www.martigvioolservice.nl</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(22)">map</a>
    </h3>
    <h3>
      <p>Houston, Texas: <span class="name">Quantum Bass Center</span></p>
      <a href="http://www.quantumbasscenter.com" target="_blank">www.quantumbasscenter.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(23)">map</a>
    </h3>
    <h3>
      <p>Lyon, France: <span class="name">Jean Auray</span></p>
      <a href="http://jauray.com" target="_blank">http://jauray.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(24)">map</a>
    </h3>
    <h3>
      <p>Portland, Oregon: <span class="name">Maureen Pandos</span></p>
      <a href="http://mdpbassworks.com" target="_blank">www.mdpbassworks.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(25)">map</a>
    </h3>
    <h3>
      <p>Copenhagen, Denmark: <span class="name">Matthias Beimdiek</span></p>
      <a href="http://www.matthiasbeimdiek.com" target="_blank">www.matthiasbeimdiek.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(26)">map</a>
    </h3>
    <h3>
      <p>Los Angeles: <span class="name">Los Angeles Bass Works</span>:&nbsp;&nbsp;</p>
      <a href="http://www.losangelesbassworks.com" target="_blank">www.losangelesbassworks.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(28)">map</a>
    </h3>
    <h3>
      <p>South Dakota: <span class="name">String Theory Luthiery</span>:&nbsp;&nbsp;</p>
      <a href="http://stringtheoryluthiery.com" target="_blank">www.stringtheoryluthiery.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(29)">map</a>
    </h3>
    <h3>
      <p>Vancouver, Canada: <span class="name">Gerard Ivan Samija</span>:&nbsp;&nbsp;</p>
      <a href="http://www.luthier.ca" target="_blank">www.luthier.ca</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(30)">map</a>
    </h3>
    <h3>
      <p>North Carolina: <span class="name">Bob Beerman</span>:&nbsp;&nbsp;</p>
      <a href="http://bassviolinshop.com/" target="_blank">www.bassviolinshop.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(31)">map</a>
    </h3>
    <h3>
      <p>Vienna, Austria: <span class="name">Kanzian & Traunsteiner</span>:&nbsp;&nbsp;</p>
      <a href="http://www.kontrabass-wien.at" target="_blank">www.Kontrabass-Wien.at</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(32)">map</a>
    </h3>
    <h3>
      <p>Kyot&#333; Japan: <span class="name">Contrabass Shop Kadomoto</span>:&nbsp;&nbsp;</p>
      <a href="http://www.contrabass-shop-kadomoto.com" target="_blank">www.contrabass-shop-kadomoto.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(33)">map</a>
    </h3>
    <h3>
      <p>Maplewood, Missouri: <span class="name">Top Notch Violins</span>:&nbsp;&nbsp;</p>
      <a href="https://topnotchviolins.com/" target="_blank">www.topnotchviolins.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(34)">map</a>
    </h3>
    <h3>
      <p>Maryland Heights, Missouri: <span class="name">Top Notch Violins</span>:&nbsp;&nbsp;</p>
      <a href="https://topnotchviolins.com/" target="_blank">www.topnotchviolins.com</a>&nbsp;&nbsp;
      <a class="fancybox" href="#map-canvas" onclick="getMap(35)">map</a>
    </h3>

    <div id="map-canvas"></div>

    <div style="clear:both; height:1em;"></div>
  </div>
</template>

<script>
  export default {
    name: 'Installers',
    data () {
      return {
        msg: 'Welcome to Installers page'
      }
    }
  }
</script>

<style scoped>
  .blue {
    width: 100%; }
  .blue #follow-list {
    background: rgba(255, 255, 255, 0.3);
    padding: 6px;
    margin: 0 auto;
    height: 40px;
    text-align: center;
    display: flex; }
  @media only screen and (max-width: 684px) and (min-width: 320px) {
    .blue .content {
      padding: 11px; } }

  .content.installers {
    padding: 33px 100px 16px;
    margin: 0 auto;
    max-width: 830px; }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .content.installers {
      padding: 33px 1em 16px; }
    .content.installers h3 > p {
      display: block; } }
  @media only screen and (min-width: 320px) and (max-width: 518px) {
    .content.installers {
      padding: 33px 11px 16px; }
    .content.installers h3 > p {
      display: block; } }
  .content.installers h2 {
    font-size: 1.5em;
    margin-bottom: .5em; }
  .content.installers h3 {
    font: 15px arial,sans-serif;
    color: #766E4A;
    text-align: left;
    padding: 0 0 9px 0;
    margin: 0; }
  .content.installers h3 a:link,
  .content.installers h3 a:visited,
  .content.installers h3 a:active {
    font: 14px Arial, Helvetica, sans-serif;
    color: #A26D48;
    text-decoration: underline; }
  .content.installers h3 p {
    display: inline-block;
    margin: 0;
    font: 15px arial,sans-serif;
    text-align: left; }

  #map-canvas {
    height: 300px;
    left: -6000px;
    margin-left: 0;
    position: fixed;
    text-align: left;
    top: 0; }

  .fancybox-wrap, .fancybox-desktop, .fancybox-type-inline, .fancybox-opened {
    min-width: 630px; }
  @media only screen and (min-width: 320px) and (max-width: 518px) {
    .fancybox-wrap, .fancybox-desktop, .fancybox-type-inline, .fancybox-opened {
      min-width: 90%; } }

  .fancybox-inner {
    min-width: 600px; }
  @media only screen and (min-width: 320px) and (max-width: 518px) {
    .fancybox-inner {
      min-width: 100%; } }

  /*# sourceMappingURL=installers.css.map */

</style>

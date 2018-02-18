<template>
  <div id="container">
    <div class="content">

      <img class="full-width-image" src="./assets/installtop-72.jpg" />
      <h2>Capo:<hr/></h2>

      <div class="text-group-left">
        <img class="cutdown right" src="./assets/cutdown60.jpg" />
        <p>For a proper fit, the side of the extension must provide a flat area in the mounting position 1-1/4" long by 1/2" high (32x13mm) high. Once the proper position for the yoke is determined, drill the pilot holes, spaced 15/16" (24mm) apart. Adjust the number of turns of the arm into the yoke until it looks like the right height, and attach to the extension. See where it closes, and adjust as necessary.</p>
        <img class="cutdown-mid right" src="./assets/cutdown60.jpg" />
        <img class="pilotholes" src="./assets/pilotholes40.jpg" />
        <p>The supplied screws are # 6 gold-plated stainless steel. They are spec'd for strength, and the geometry allows for maximum adjustability. Use of other screws is discouraged. Please use a fresh, high quality, #2 Phillips driver. Other types such as Pozidrive will strip the screw head and make for headaches and some interesting curses. So please be careful during this procedure!</p>
        <p>When installing a Capo or E-Stop it is sometimes necessary to cut the threaded stud to length. All parts are made from free machining brass, and can easily be cut/ground/sanded/polished to fit a particular installation. Besides the stud, there are also instances when the yoke itself must be altered. Some extensions are too thin under the Eb to accommodate the full footprint. The yoke contains enough bulk that it can be ground substantially and still retain adequate strength.</p>
        <hr />
        <p>The standard Capo and E-Stop arms fit extensions that measure up to 3/4" (19mm) from the mounting surface to the string center. If you have an unusually wide extension, let me know, and I can ship longer fingers.</p>
        <p>Be aware that the threaded hole in the yoke is angled in two axes. The stud must exit the hole angled away from the string. Capos are shipped with the arms already threaded into the yokes. If you remove them for cutting, be sure to put them back the same way. If you do remove them completely, they may turn too freely when reassembled. Contact me for instructions on how to fix this.</p>

      </div>

      <div id="capo-bottom">
        <div class="left-div">
        </div>
        <div class="right-div">
          <p>Another issue is the angle of the Capo finger over the extension surface. Some installers fret if they see that it does not lie tangentially over the extension fingerboard. In other words, the finger appears to have too little rake. This is intentional, as the reduced angle decreases string deflection when closing the Capo. In cases of extreme fingerboard radius where the finger would contact the wood before full closure, a rake can be ground into the foot of the Capo yoke. There is enough bulk there to allow for a cut of up to about 10&deg;. For the E-Stop finger, it can simply be bent in a vise to increase the rake. Do not try to bend a Capo finger however.</p>
          <img src="./assets/grind3a.jpg" />
        </div>
      </div>
    </div>

    <div class="blue">
      <div class="content">
        <img class="full-width-image" src="./assets/install-bottom-chris.jpg" />
      </div>
    </div>

    <div class="content">

      <div id="estop-top">
        <div class="left-div">
          <h2>E-Stop:<hr/></h2>
          <p>The E-stop has a 1/2" wide x 0.15" thick (13x4mm) tang which is intended to be screwed into the neck under the nut. The remaining nut must of course be notched to fit over the tang.  Most installers also add an additional countersunk hole in the tang, besides implementing the countersunk slot.</p>
          <p>I recommend placement where the center of the arm-shaft hole is 13/16" (21mm) away from the center of the E-string. The final working distance will vary with the installation, and the workable range is wide. If your pegbox or extension is unusually wide and you think this distance will be 1" (25mm) or more, be sure to ask for a long finger.</p>
          <p>The rotational resistance for the Capo is "set at the factory"  if you will. For the E-Stop it can be adjusted by the player via a set screw using a supplied hex key.</p>
        </div>
        <div class="right-div">
          <img src="./assets/EBottom40.jpg" />
        </div>
      </div>

      <div id="estop-mid">
        <div class="left-div">
          <img src="./assets/estop1.jpg" />
        </div>
        <div class="right-div">
          <p>Not all installers do this, but the E-Stop can be used as a mounting point for the extension body.</p>
          <p>Some installers cut down the tang at the end of the extension to avoid the need for notching the nut. I do not endorse this, but no problems seem to have resulted.</p>
          <p>Since the E-Stop bracket has no U-channels like the Capo, it is less adjustable. Adjustments can be made by increasing or decreasing  number of threads showing, but the height change will be in 1mm increments. Therefore it is advised to set up the bass first using only a screw in the slot. Adjust in and out to set intonation, and only then drill for the second mounting screw. Once installed, you can also make fine adjustments by bending the finger or filing down the leather wrap.</p>
        </div>
      </div>
    </div>

    <div class="blue">
      <div class="content">
        <div id="estop-bot">
          <div class="text-group">
            <p>One other note: Some installers have informed me that operation is better if the finger is set to close a few degrees less than perpendicular to the string &ndash; pointing slightly up.</p>
            <p>Also, a few customers have chosen to use my mounts, but make their own wooden fingers. For this I can ship yokes or E-Stop plates with lengths of plain threaded stud instead of finished arms.</p>
          </div>
          <img src="./assets/wolfangle.jpg" />
        </div>
      </div>
    </div>

    <div class="content">
      <div id="warranty">
        <img src="./assets/scroll1.png" />
        <h2>Warranty:<hr/></h2>
        <ul>
          <li>Uninstalled units can be returned for full refund within six months.</li>
          <li>Installed units can be returned within 3 months if found unsatisfactory for any reason.</li>
          <li>In the case of any failure that is agreed to be the result of a manufacturing defect, parts will be repaired replaced at no charge within 10 years of purchase.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Installation',
    data () {
      return {
        msg: 'Welcome to Installation page'
      }
    }
  }
</script>

<style scoped>
  .content {
    min-width: inherit;
    text-align: left;
    padding: 40px; }
  @media only screen and (max-width: 480px) {
    .content {
      padding: 11px; } }
  .content h2 {
    margin: 1.2em 0 .6em 0; }
  .content p {
    line-height: 1.4em;
    margin: 0 0 1.5em 0; }
  .content p.right {
    float: left;
    width: 100%;
    max-width: 75%; }
  @media only screen and (max-width: 480px) {
    .content p.right {
      max-width: inherit; } }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .content p.right {
      max-width: 65%; } }

  img {
    border: none; }

  img.right {
    float: right; }

  img.left {
    float: left; }

  .full-width-image {
    width: 100%; }

  .pilotholes {
    width: auto;
    max-height: 440px;
    padding: 0 19px 63px 0px;
    float: left;
    border: none; }
  @media only screen and (max-width: 480px) {
    .pilotholes {
      max-height: 400px;
      padding-bottom: 1em; } }

  .cutdown {
    margin: 0;
    float: right;
    width: 38%;
    padding: 0 0 20px 20px;
    border: none; }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    .cutdown {
      display: none; } }
  @media only screen and (max-width: 480px) {
    .cutdown {
      display: none; } }

  .cutdown-mid {
    display: none; }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    .cutdown-mid {
      display: block;
      width: 48%;
      margin-bottom: 1em;
      margin-left: 20px; } }
  @media only screen and (max-width: 480px) {
    .cutdown-mid {
      display: block;
      width: 100%;
      margin-bottom: 2em; } }

  div.text-group-left {
    margin: 0 0 1.4em; }
  @media only screen and (min-width: 585px) and (max-width: 730px) {
    div.text-group-left P {
      clear: right; } }

  #capo-bottom {
    width: 100%;
    min-height: 201px;
    margin-top: 2em;
    display: flex;
    flex-direction: row; }
  #capo-bottom .left-div {
    width: 41%;
    min-height: 363px;
    background: url(./assets/tangent40.jpg) no-repeat 54% 59%;
    background-size: 79%;
    background-color: #c9b679; }
  @media only screen and (max-width: 1024px) {
    #capo-bottom .left-div {
      width: 40%;
      background-size: 86%; } }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    #capo-bottom .left-div {
      background-color: #c9b679;
      background-size: 90%;
      height: 100%;
      min-height: 375px; } }
  @media only screen and (max-width: 767px) {
    #capo-bottom .left-div {
      background-color: transparent;
      width: 100%;
      background-size: 100%;
      margin-bottom: 1em;
      min-height: 351px; } }
  @media only screen and (max-width: 480px) {
    #capo-bottom .left-div {
      min-height: inherit; } }
  #capo-bottom .right-div {
    width: 54%;
    margin-left: 40px; }
  #capo-bottom .right-div img {
    width: 100%; }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    #capo-bottom .right-div {
      width: 54%; } }
  @media only screen and (max-width: 480px) {
    #capo-bottom .right-div {
      width: 100%;
      margin-bottom: 2em;
      margin-left: 0; } }
  @media only screen and (max-width: 767px) {
    #capo-bottom .right-div {
      width: 100%;
      margin-left: 0; } }
  @media only screen and (max-width: 767px) {
    #capo-bottom {
      margin-top: 0;
      display: block; } }

  #estop-top {
    width: 100%;
    min-height: 201px;
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between; }
  #estop-top img {
    width: 100%; }
  #estop-top .left-div {
    width: 45%;
    min-height: 340px;
    margin-right: 36px; }
  #estop-top .left-div h2 {
    margin: 0 0 .6em 0; }
  #estop-top .left-div img {
    margin-top: 40px; }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    #estop-top .left-div {
      width: 100%;
      min-height: inherit;
      float: none; } }
  @media only screen and (max-width: 480px) {
    #estop-top .left-div {
      width: 100%;
      float: none; } }
  #estop-top .right-div {
    width: 51%; }
  #estop-top .right-div img {
    width: 100%;
    margin-bottom: 40px; }
  @media only screen and (max-width: 480px) {
    #estop-top .right-div img {
      margin-bottom: 1em; } }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    #estop-top .right-div {
      width: 100%; } }
  @media only screen and (max-width: 480px) {
    #estop-top .right-div {
      width: 100%; } }
  @media only screen and (max-width: 767px) {
    #estop-top {
      display: block; } }

  #estop-mid {
    width: 100%;
    min-height: 201px;
    margin-top: 2em;
    display: flex;
    flex-direction: row; }
  #estop-mid img {
    width: 100%; }
  #estop-mid .left-div {
    width: 45%;
    margin-right: 36px; }
  #estop-mid .left-div h2 {
    margin: 0 0 .6em 0; }
  @media only screen and (max-width: 480px) {
    #estop-mid .left-div {
      width: 100%;
      position: absolute;
      bottom: 0; } }
  #estop-mid .right-div {
    width: 52%; }
  #estop-mid .right-div img {
    width: 100%;
    margin-bottom: 40px; }
  @media only screen and (max-width: 480px) {
    #estop-mid .right-div {
      width: 100%;
      position: absolute;
      top: 0; } }
  @media only screen and (max-width: 480px) {
    #estop-mid {
      margin-top: 0;
      margin-bottom: 1.5em;
      position: relative;
      height: 580px; } }

  #estop-bot {
    vertical-align: top;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    color: white; }
  #estop-bot hr {
    margin-bottom: 2em;
    width: 60%; }
  #estop-bot img {
    max-width: 39%;
    margin-left: 35px; }
  @media only screen and (max-width: 480px) {
    #estop-bot {
      width: 100%;
      display: block; }
    #estop-bot .text-group {
      max-width: inherit; }
    #estop-bot img {
      width: 100%;
      max-width: 100%;
      margin-left: 0; } }

  #warranty {
    vertical-align: top;
    position: relative;
    min-height: 238px; }
  #warranty hr {
    width: auto; }
  #warranty li {
    margin-left: 18px;
    margin-bottom: 1em; }
  #warranty img {
    width: 12%;
    min-width: 123px;
    float: right;
    margin-left: 40px; }

  p.bold {
    color: #106704;
    height: 60px; }

  .blue {
    padding: 11px 0 0 0; }

  /*# sourceMappingURL=installation.css.map */

</style>

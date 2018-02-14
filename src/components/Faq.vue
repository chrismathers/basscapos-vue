<template>
  <div class="content faq">

    <div class="faqlist">
      <img src="/static/images/Csharp1270.jpg">
      <h2>Frequently Asked Questions<hr/></h2>

      <p class="q">Question: Is this a "kit", and does it have everything I need?</p>

      <p class="a">Answer: No. I only supply the brass hardware. Your luthier must carve and fit the wood extension body. To do this he must have access to your bass.</p>

      <p class="q">Q: Can a C-extension be fitted to my bass?</p>

      <p class="a">A: In most cases, yes. The ease of which an extension can be fitted depends on the shape of the scroll and pegbox, and the thickness of the fingerboard. There are a few basses in which the scroll sticks so far forward that there is no room for the extension body. This is rare however. If you want to have an extension, your best bet is to locate a luthier who has made them before, and show him you bass. He should quickly be able to tell you how suitable your bass is for an extension.</p>

      <p class="q">Q: Can an extension damage my bass or hurt the sound?</p>

      <p class="a">A: No. There is a common misconception that a C-Extension adds tension to the top. This is mostly false. There is nothing inherent about an extension which changes the downforce on the bridge. Now, the tension of the extended string in some sets is indeed slightly higher than the standard length E-String, but not excessively so. With Thomastic strings, for example, the "Long-E" in a "Mittel" set is actually the same tension as a normal "Stark" E. With Helicore strings the tension is unchanged. In any case, the effect on the top tension is either unchanged or only very slightly increased. As far as sound goes, any experienced extension builder will tell you that in almost all cases the player reports an overall improvement after getting an extension. We don't know why this is, but perhaps it's down to the low notes opening up the bass.</p>

      <p class="q">Q: Do I need to cut or drill my scroll to add an extension?</p>

      <p class="a">A: Cutting away part of the scroll to fit an extension is something that was done decades ago, but no self-respecting luthier would do it today. Drilling through the scroll is still done by many luthiers to get the string back to the tuner. There are ways to route the string back into the pegbox without making a hole using <a href="other.html">secondary pulleys</a>, tubes, etc. but drilling is usually the simplest and cheapest option.</p>

      <p class="q">Q: Can I install Bass Capos myself?</p>

      <p class="a">A: Yes and no. If your fingered extension is flat on the side you may indeed be able to install the Capos yourself, but unless you are an experienced woodworker or at least handy with tools, I'd leave it to a pro. Installation is usually quick and easy for an experienced luthier, so the cost should be quite low. Installing the E-Stop is a bit more involved. A reasonable gauge might be if you have ever fitted a nut yourself. If so, then you can probably install both Capos and an E-Stop yourself!</p>


      <!--<ol>
          <li>They can be mounted on most existing C-extensions without altering or even removing the extension from the bass. Some bassists with mechanical extensions have even chosen to remove the machine and install capos instead.</li>
          <li>They close firmly where they are set to close, without need for "frets" as some designs incorporate. Operation is quick and quiet.</li>
          <li>When open, they interfere in no way with normal fingering on the extension.</li>
          <li>They are adjustable for intonation, and can be fine-adjusted by the player, as might be required when switching to a different kind of C-string.</li>
          <li>They add little weight or bulk to the instrument (about 35 grams per unit)</li>
          <li>The only drilling is in the extension. The scroll is not touched.</li>
          <li>Matching E-stop also available. Installs with two screws under the nut, so again no visible scars result.</li>
          <li>BassCapos are currently being used by double bassists in the New York Philharmonic, Metropolitan Opera Orchestra, The Boston Symphony, and the Tonhalle Orchestra of Zurich and are described in Chuck Traeger's new book, <u>Setup and Repair of the Double Bass</u></li>
          <li>Installation details can be found <a href="installation.html">here</a>. Detailed specs and installation instructions available upon request</li>
      </ol>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Faq',
    data () {
      return {
        msg: 'Welcome to FAQ page'
      }
    }
  }
</script>

<style>
  .content.faq {
    min-width: inherit;
    text-align: left;
    padding: 40px; }
  @media only screen and (max-width: 480px) {
    .content.faq {
      padding: 11px; } }
  .content.faq .faqlist h2 {
    margin-bottom: 2em; }
  .content.faq .faqlist h2 hr {
    width: auto; }
  @media only screen and (max-width: 480px) {
    .content.faq .faqlist h2 {
      font-size: 1.3em; } }
  .content.faq .faqlist .q a, .content.faq .faqlist .a a {
    text-decoration: underline;
    color: #766E4A; }
  .content.faq .faqlist .q {
    color: #0076A4;
    margin-bottom: .5em; }
  .content.faq .faqlist .a {
    color: #333;
    margin-bottom: 1.5em; }
  .content.faq .faqlist img {
    float: right;
    clear: left;
    margin: 1em;
    padding: 0;
    width: 270px;
    height: 208px; }
  @media only screen and (max-width: 480px) {
    .content.faq .faqlist img {
      float: none;
      display: block;
      margin: 0 auto 1em; } }
  .content.faq .faqlist li {
    line-height: 1.3em;
    margin: 10px 0; }

  /*# sourceMappingURL=faq.css.map */


</style>

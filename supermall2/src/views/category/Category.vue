<template>
<div class="wrapper">
  <ul>
  <li>阿松大11</li>
  <li>阿松大12</li>
  <li>阿松大13</li>
  <li>阿松大14</li>
  <li>阿松大15</li>
  <li>阿松大16</li>
  <li>阿松大17</li>
  <li>阿松大18</li>
  <li>阿松大19</li>
  <li>阿松大110</li>
  <li>阿松大111</li>
  <li>阿松大112</li>
  <li>阿松大113</li>
  <li>阿松大114</li>
  <li>阿松大115</li>
  <li>阿松大116</li>
  <li>阿松大117</li>
  <li>阿松大118</li>
  <li>阿松大119</li>
  <li>阿松大120</li>
  <li>阿松大121</li>
  <li>阿松大122</li>
  <li>阿松大123</li>
  <li>阿松大124</li>
  <li>阿松大125</li>
  <li>阿松大126</li>
  <li>阿松大127</li>
  <li>阿松大128</li>
  <li>阿松大129</li>
  <li>阿松大130</li>
  <li>阿松大131</li>
  <li>阿松大132</li>
  <li>阿松大133</li>
  <li>阿松大134</li>
  <li>阿松大135</li>
  <li>阿松大136</li>
  <li>阿松大137</li>
  <li>阿松大138</li>
  <li>阿松大139</li>
  <li>阿松大140</li>
  <li>阿松大141</li>
  <li>阿松大142</li>
  <li>阿松大143</li>
  <li>阿松大144</li>
  <li>阿松大145</li>
  <li>阿松大146</li>
  <li>阿松大147</li>
  <li>阿松大148</li>
  <li>阿松大149</li>
  <li>阿松大150</li>
  <li>阿松大151</li>
  <li>阿松大152</li>
  <li>阿松大153</li>
  <li>阿松大154</li>
  <li>阿松大155</li>
  <li>阿松大156</li>
  <li>阿松大157</li>
  <li>阿松大158</li>
  <li>阿松大159</li>
  <li>阿松大160</li>
  <li>阿松大161</li>
  <li>阿松大162</li>
  <li>阿松大163</li>
  <li>阿松大164</li>
  <li>阿松大165</li>
  <li>阿松大166</li>
  <li>阿松大167</li>
  <li>阿松大168</li>
  <li>阿松大169</li>
  <li>阿松大170</li>
  <li>阿松大171</li>
  <li>阿松大172</li>
  <li>阿松大173</li>
  <li>阿松大174</li>
  <li>阿松大175</li>
  <li>阿松大176</li>
  <li>阿松大177</li>
  <li>阿松大178</li>
  <li>阿松大179</li>
  <li>阿松大180</li>
  <li>阿松大181</li>
  <li>阿松大182</li>
  <li>阿松大183</li>
  <li>阿松大184</li>
  <li>阿松大185</li>
  <li>阿松大186</li>
  <li>阿松大187</li>
  <li>阿松大188</li>
  <li>阿松大189</li>
  <li>阿松大190</li>
  <li>阿松大191</li>
  <li>阿松大192</li>
  <li>阿松大193</li>
  <li>阿松大194</li>
  <li>阿松大195</li>
  <li>阿松大196</li>
  <li>阿松大197</li>
  <li>阿松大198</li>
  <li>阿松大199</li>
  <li>阿松大1100</li>
  </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Category',
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position) =>{
      console.log(position);
    })
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多');
    })
  },
}
</script>

<style scoped>
.wrapper{
  background-color: #bfa;
  height: 150px;
  overflow: hidden;
}
</style>
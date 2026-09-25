/**
 * 首页运行时入口。
 *
 * 页面本身保持纯静态：这里仅按需加载首页唯一需要的外部 RAG 小组件，
 * 其他图片、样式和页面结构都从当前站点本地读取。
 */
(function loadRagWidget() {
  var widgetScript = document.createElement("script");

  widgetScript.src =
    "https://rag.luckynwa.top/widget.js?api_key=579e7e975dc52e2be8db96aa2241f0d9&base_url=https%3A%2F%2Frag.luckynwa.top";
  widgetScript.async = true;
  widgetScript.dataset.source = "lucky-index";

  document.body.appendChild(widgetScript);
})();

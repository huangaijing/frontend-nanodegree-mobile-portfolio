## Website Performance Optimization portfolio project

This is a chanllenge project to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible.

### How to run this porject on a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```


### Part 1: Optimize PageSpeed Insights score for index.html

[PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights)
Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Optimizations done for index.html to achieve a PageSpeed score of at least 90
* compress html, css and js files
* inline all css styles
* inventory my own assets and third-party assets on my pages(all images,css styles,js files).
* resize and compress all images
* make print-min.css downloaded only when media type is print(non render blocking)
* set script "analytics.js" and "perfmatters-min.js" as async to make them non parser blocking
* add CACHE-CONTROL meta tag in index.html to enable caching the index.html

### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

#### Optimizations done for views/js/main.js to achieve 60fps frame-rate
* make layers to avoid large painting efforts by adding "will-change: transform;" to ".mover" in views/css/style.css 
* fix forced synchrouous layout in updatePositions() (scroll page)
* fix forced synchouous layout in changePizzaSizes(size) (resize pizza)

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>


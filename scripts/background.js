chrome.storage.local.get(['adsScavengerOn'], ({ adsScavengerOn }) => {
  if (adsScavengerOn) {
    setInterval(() => {
        [...document.getElementsByClassName("adsbygoogle")].map(element => element.style.display = 'none')
    }, 1000)
  }
})
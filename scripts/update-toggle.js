window.onload = () => {
  chrome.storage.local.get(['adsScavengerOn'], ({ adsScavengerOn }) => {
    if (adsScavengerOn) {
      const toggleBar = document.getElementById('scavenge')
      toggleBar.classList.add('enabled')
    }
  })
}

const triggerToggle = () => {
  const toggleBar = document.getElementById('scavenge')
  if (toggleBar.classList.contains('enabled')) {
    chrome.storage.local.set({ adsScavengerOn: false })
    toggleBar.classList.remove('enabled')
  } else {
    chrome.storage.local.set({ adsScavengerOn: true })
    toggleBar.classList.add('enabled')
  }
}

document.getElementById("scavenge").addEventListener("click", () => triggerToggle());
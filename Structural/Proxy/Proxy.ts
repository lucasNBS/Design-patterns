// Classe do vídeo
class Video {
  private name: string

  constructor(name: string) {
    this.name = name
  }
}

// Interface do baixador de vídeos
interface VideoDownloader {
  getVideo(videoName: string): Video
}

// Classe do baixador real de vídeos
class RealVideoDownloader implements VideoDownloader {
  public getVideo(videoName: string): Video {
    console.log("Connecting to https://www.youtube.com")
    console.log("Downloading video " + videoName)
    console.log("Retrieving video metadata")
    return new Video(videoName)
  }
}

// Classe proxy do baixador de vídeos
class ProxyVideoDownloader implements VideoDownloader {
  private videoCache: Map<string, Video> = new Map<string, Video>()
  private downloader = new RealVideoDownloader()

  public getVideo(videoName: string): Video {
    if (!this.videoCache.get(videoName)) {
      this.videoCache.set(videoName, this.downloader.getVideo(videoName))
      return
    }
    console.log("Getting video " + videoName + " from cache")
    return this.videoCache.get(videoName)
  }
}

// Função padrão do código
function proxyMain() {
  const videoDownloader: ProxyVideoDownloader = new ProxyVideoDownloader()
  videoDownloader.getVideo("Never Gonna Give You Up - Rick Astley")
  videoDownloader.getVideo("Never Gonna Give You Up - Rick Astley")
  videoDownloader.getVideo("Couting Stars - One Republic")
  videoDownloader.getVideo("Let Me Love You - Justin Bieber")
  videoDownloader.getVideo("Never Gonna Give You Up - Rick Astley")
  videoDownloader.getVideo("Couting Stars - One Republic")
}
proxyMain()
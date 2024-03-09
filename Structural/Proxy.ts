/*
  PROXY - Structural Pattern

  Fornece um substituto ou marcador da localização de outro objeto para controlar o acesso a este.

  EXEMPLO

  Considere uma aplicação para baixar vídeos da web.

  Sempre que você escolher baixar um vídeo, esta aplicação se conecta à plataforma onde o vídeo está hospedado, faz o download de seus dados e os retorna à aplicação. Porém, este processo, funcionando apenas deste modo, não está otimizado, pois se o download do vídeo já tiver sido feito, não é mais necessário consultar o local onde ele está hospedado para baixá-lo novamente. O ideal seria haver um ponto intermediário entre o vídeo e aplicação onde os dados pudessem ser cacheados e consultados mais rapidamente.

  O padrão Proxy resolve esse tipo de problema.

  Ao invés de permitir a interação direta com uma classe ou sua instância, criamos uma classe intermediária que realiza outras operações e então se comunica com esta classe ou instância.

  EXPLICAÇÃO DO CÓDIGO

  O vídeo se torna uma classe com seus métodos e propriedades.

  Criamos uma interface para o baixador de vídeos com seus métodos.

  Criamos uma classe para o baixador real de vídeos implementando a interface do baixador de vídeos.

  Criamos uma classe proxy do baixador de vídeos, também implementando a interface do baixador de vídeos. Note como o método para buscar o vídeo consulta a cache antes de buscar o vídeo e só depois, caso não o encontre, o busca.

  Enfim, instanciamos o proxy do baixador de vídeos e buscamos quaisquer vídeo que quiser, sabendo que caso o mesmo vídeo seja baixado várias vezes, teremos de consultar o local da hospedagem apenas uma vez.
*/

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
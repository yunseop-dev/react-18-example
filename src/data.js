// Note: 데이터 가져오기를 수행하는 방식은 Suspense와 함께
// 사용하는 프레임워크에 따라 다릅니다.
// 일반적으로 캐싱 로직은 프래임워크 내부에 있습니다.
let cache = new Map();

export function fetchData(url) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }
    return cache.get(url);
}

async function getData(url) {
    if (url === '/the-beatles/albums') {
        return await getAlbums();
    } else if (url === '/the-beatles/bio') {
        return await getBio();
    } else {
        throw Error('Not implemented');
    }
}

async function getBio() {
    // 가짜 딜레이를 추가하여 대기 시간을 눈에 띄게 만듭니다.
    await new Promise(resolve => {
        setTimeout(resolve, 500);
    });

    return `The Beatles were an English rock band,
    formed in Liverpool in 1960, that comprised
    John Lennon, Paul McCartney, George Harrison
    and Ringo Starr.`;
}

async function getAlbums() {
    // 가짜 딜레이를 추가하여 대기 시간을 눈에 띄게 만듭니다.
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });

    return [{
        id: 13,
        title: 'Let It Be',
        year: 1970
    }, {
        id: 12,
        title: 'Abbey Road',
        year: 1969
    }, {
        id: 11,
        title: 'Yellow Submarine',
        year: 1969
    }, {
        id: 10,
        title: 'The Beatles',
        year: 1968
    }, {
        id: 9,
        title: 'Magical Mystery Tour',
        year: 1967
    }, {
        id: 8,
        title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
        year: 1967
    }, {
        id: 7,
        title: 'Revolver',
        year: 1966
    }, {
        id: 6,
        title: 'Rubber Soul',
        year: 1965
    }, {
        id: 5,
        title: 'Help!',
        year: 1965
    }, {
        id: 4,
        title: 'Beatles For Sale',
        year: 1964
    }, {
        id: 3,
        title: 'A Hard Day\'s Night',
        year: 1964
    }, {
        id: 2,
        title: 'With The Beatles',
        year: 1963
    }, {
        id: 1,
        title: 'Please Please Me',
        year: 1963
    }];
}

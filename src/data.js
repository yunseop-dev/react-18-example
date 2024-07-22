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
    if (url.startsWith('/posts')) {
        return await getPosts();
    } else {
        throw Error('Not implemented');
    }
}

async function getPosts() {
    // 가짜 딜레이를 추가하여 대기 시간을 눈에 띄게 만듭니다.
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
    let posts = [];
    for (let i = 0; i < 500; i++) {
        posts.push({
            id: i,
            title: 'Post #' + (i + 1)
        });
    }
    return posts;
}

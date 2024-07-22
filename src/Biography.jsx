import { fetchData } from './data.js';

// Note: 이 컴포넌트는 실험적인 API를 사용하여 작성되었습니다.
// 아직 안정된 버전의 React에서는 사용할 수 없습니다.

// 지금 바로 따라 할 수 있는 현실적인 예시를 보려면 Relay 또는
// Next.js와 같이 Suspense와 통합된 프레임워크를 사용해 보세요.

export default function Biography({ artistId }) {
    const bio = use(fetchData(`/${artistId}/bio`));
    return (
        <section>
            <p className="bio">{bio}</p>
        </section>
    );
}

// 데모를 실행하기 위한 임시 버그 해결 방법입니다.
// TODO: 버그가 수정되면 실제 구현체로 교체합니다.
function use(promise) {
    if (promise.status === 'fulfilled') {
        return promise.value;
    } else if (promise.status === 'rejected') {
        throw promise.reason;
    } else if (promise.status === 'pending') {
        throw promise;
    } else {
        promise.status = 'pending';
        promise.then(
            result => {
                promise.status = 'fulfilled';
                promise.value = result;
            },
            reason => {
                promise.status = 'rejected';
                promise.reason = reason;
            },
        );
        throw promise;
    }
}

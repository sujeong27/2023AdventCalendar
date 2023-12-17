// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector(".modal");
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement("div");
    modal.className = "modal hidden";

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content zoomIn";

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement("div");
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = "Door Image";
    image.style.width = "100%";
    image.style.height = "211px";

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement("p");
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener("click", () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove("hidden"), 0);
}

const modalMessageList = [
    { number: 1, message: "올 한해 함께 일하는 동안 즐거웠어요. 즐거운 성탄절 되세요!" },
    { number: 2, message: "즐거운 연말연시 보내세요! 모든 크리스마스 소원이 이루어지길 바라요." },
    { number: 3, message: "즐거운 크리스마스 보내고 새해 복 많이 받으세요!" },
    { number: 4, message: "사랑과 기쁨이 가득한 크리스마스 되길 바라요. 메리 크리스마스!" },
    { number: 5, message: "축제의 계절에 즐거움과 행복한 웃음이 가득하길 바라요." },
    { number: 6, message: "따뜻하고 행복한 크리스마스 보내길! 새해 복 많이 받으세요!" },
    { number: 7, message: "올해 열심히 달려온 당신에게 박수를 보냅니다. 즐거운 성탄절 보내시고 행복한 연말 보내세요" },
    { number: 8, message: "한해 열심히 일했으니 누구보다 행복한 크리스마스를 보내세요." },
    { number: 9, message: "메리 크리스마스! 남은 한해 잘 마무리하시고 즐거운 성탄절 보내시기 바랄게요" },
    { number: 10, message: "추운 겨울, 감기 조심하시고 건강한 크리스마스 보내세요!" },
    { number: 11, message: "반짝이는 트리처럼 빛나고 행복한 크리스마스 보내시기 바랍니다." },
    { number: 12, message: "사랑과 행복이 가득한 크리스마스 보내세요." },
    { number: 13, message: "Merry Christmas! 가슴 속에 품은 소원이 모두 이루어지는 크리스마스 보내세요." },
    { number: 14, message: "크리스마스 트리의 불빛처럼 따뜻하고 캐럴의 멜로디처럼 신나는 크리스마스 보내세요." },
    { number: 15, message: "고요한 밤, 거룩한 밤. 당신에게 사랑과 행복 그리고 기쁨이 함께하길 두 손 모아 기도합니다." },
    { number: 16, message: "하얗게 내려 쌓이는 눈처럼 좋은 일만 차곡차곡 쌓이기를 기원합니다." },
    { number: 17, message: "메리 크리스마스! 남은 한해 잘 마무리하시고 즐거운 성탄절 보내시기 바랍니다." },
    { number: 18, message: "12월, 행복이 가득찬 마음으로 채워지는 시간이 되기를." },
    { number: 19, message: "올 한 해도 행복한 크리스마스 되길 바랍니다." },
    { number: 20, message: "날씨는 춥지만 마음은 따뜻한 크리스마스 보내세요." },
    { number: 21, message: "모두에게 다가오는 크리스마스, 행복이 함께하기를!" },
    { number: 22, message: "행복이 가득한 크리스마스를 선물로 드립니다." },
    { number: 23, message: "소중한 사람과 함께 따뜻한 크리스마스 보내세요." },
    { number: 24, message: "오늘밤 산타 할아버지가 웃음 가득한 선물보따리를 가져다 주시길 바랄게요." },
];

document.getElementById('missionBtn').addEventListener('click', function () {
        var missionInfo = document.getElementById('missionInfo');
        missionInfo.classList.toggle('hidden');
    });

    document.getElementById('teamBtn').addEventListener('click', function () {
        var teamInfo = document.getElementById('teamInfo');
        teamInfo.classList.toggle('hidden');
    });

    document.getElementById('searchBtn').addEventListener('click', function () {
        var topicDropdown = document.getElementById('topicDropdown');
        topicDropdown.classList.toggle('hidden');
    });

    document.getElementById('goBtn').addEventListener('click', function () {
        var topicSelect = document.getElementById('topicSelect');
        var selectedTopic = topicSelect.value;
        if (selectedTopic) {
            window.location.href = selectedTopic;
        }
    });
    document.getElementById('searchDropdownBtn').addEventListener('click', function () {
        var topicDropdown = document.getElementById('topicDropdown');
        topicDropdown.classList.toggle('hidden');
    });

    document.getElementById('goBtn').addEventListener('click', function () {
        var topicSelect = document.getElementById('topicSelect');
        var selectedTopic = topicSelect.value;
        if (selectedTopic) {
            window.location.href = selectedTopic;
        }
    });
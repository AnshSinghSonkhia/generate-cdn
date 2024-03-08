function githubCDN(githubUrl) {
    const url = new URL(githubUrl);
    const userName = url.pathname.split('/')[1];
    const repoName = url.pathname.split('/')[2];
    const branchName = url.pathname.split('/')[4];
    const filePath = url.pathname.split('/').slice(5).join('/'); // Adjust slice index based on repository structure

    return `https://cdn.jsdelivr.net/gh/${userName}/${repoName}@${branchName}/${filePath}`;
}

function unpkgCDN(unpkgUrl) {
    const url = new URL(unpkgUrl);
    const packageName = url.pathname.split('/')[1];
    const filePath = url.pathname.slice(packageName.length + 2); // Adjust slice index based on repository structure

    return `https://cdn.jsdelivr.net/npm/${packageName}/${filePath}`;
}

// const unpkgUrl = 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';
// const jsDelivrLink = unpkgCDN(unpkgUrl);
// console.log(jsDelivrLink);

// const unpkgUrl2 = 'https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css';
// const jsDelivrLink2 = unpkgCDN(unpkgUrl2);
// console.log(jsDelivrLink2);

// const githubUrl3 = 'https://github.com/AnshSinghSonkhia/thousand-colors/blob/main/index.js';
// const cdnLink = githubCDN(githubUrl3);
// console.log(cdnLink);


module.exports.githubCDN = githubCDN;
module.exports.unpkgCDN = unpkgCDN;

// module.exports = {
//     githubCDN,
//     unpkgCDN
// };
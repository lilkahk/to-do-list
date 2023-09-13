import pageLoad from "./pageLoad";
if (!localStorage.getItem('level')) {
    localStorage.setItem('level', 0);
    localStorage.setItem('xp', 0);
}
pageLoad();
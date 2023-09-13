import pageLoad from "./pageLoad";
if (!localStorage.getItem('level')) {
    localStorage.setItem('level', 0);
}
pageLoad();
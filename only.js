// ************************************************************************** //
//                                                                            //
//                                                                            //
//   only.js                                                                  //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/08/29 19:43:47 by bulliby            \     \_\ \     /     //
//   Updated: 2020/08/29 20:14:01 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

export function only(haystack, needles) {
    let ret = Object.create(null);
    Object.entries(haystack).map(function([key, value]) {
        if (needles.includes(key)) {
            ret[key] = value;
        }
    });

    return ret;
}

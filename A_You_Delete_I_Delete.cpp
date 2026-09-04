//    --------------------        --------------------
//      -------------------      -------------------
//       --------------------  --------------------
//        ----------------------------------------
//          -------------------------------------
//           ----------------------------------
//            --------------------------------
//              ----------------------------
//               --------------------------
//                 ----------------------
//                 ----------------------
//               --------------------------
//              ----------------------------
//            --------------------------------
//           ----------------------------------
//          ------------------------------------
//        ----------------------------------------
//       --------------------  --------------------
//      -------------------      -------------------
//    --------------------        --------------------
// define Xeno
#include <bits/stdc++.h>
using namespace std;

using ll = long long;
using vi = vector<int>;
using vll = vector<ll>;
using pii = pair<int, int>;

#define pb push_back
#define all(x) x.begin(), x.end()
#define fr(i, n) for (int i = 0; i < n; i++)
#define fr1(i, n) for (int i = 1; i <= n; i++)
#define zero return 0

#ifdef LOCAL
#define debug(x) cerr << #x << " = " << x << '\n'
#else
#define debug(x)
#endif

const ll INF = 1e18;
const int MOD = 1e9 + 7;
const int MOD2 = 998244353;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while (t--)
    {
        string s;
        cin >> s;
        int n = s.length();
        string ba = "";
        bool fa = true;
        fr(i, n)
        {
            if (s[i] == '0')
            {
                string s_a = s.substr(0, i) + s.substr(i + 1);
                int sz = s_a.length();
                string bb = "";
                bool fb = true;
                fr(j, sz)
                {
                    if (s_a[j] == '1')
                    {
                        string s_b = s_a.substr(0, j) + s_a.substr(j + 1);
                        if (fb || s_b < bb)
                        {
                            bb = s_b;
                            fb = false;
                        }
                    }
                }
                if (fa || bb > ba)
                {
                    ba = bb;
                    fa = false;
                }
            }
        }
        cout << ba << "\n";
    }

    return 0;
}
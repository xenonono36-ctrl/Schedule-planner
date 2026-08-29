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
        int n, m;
        cin >> n >> m;
        vi has(26, 0);
        fr(i, n)
        {
            string w;
            cin >> w;
            has[toupper(w[0]) - 'A'] = 1;
        }
        bool ok = true;
        fr(i, m)
        {
            string a;
            cin >> a;
            for (char c : a)
            {
                if (!has[c - 'A'])
                {
                    ok = false;
                }
            }
        }
        if (ok) cout << "YES\n";
        else cout << "NO\n";
    }

    return 0;
}
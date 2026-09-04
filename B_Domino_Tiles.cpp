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
        int n;
        cin >> n;
        string a, b;
        cin >> a >> b;
        int e_a = 0, o_a = 0, e_b = 0, o_b = 0;
        fr(i, n)
        {
            if (i % 2 == 0)
            {
                if (a[i] == '1') e_a++;
                if (b[i] == '1') e_b++;
            }
            else
            {
                if (a[i] == '1') o_a++;
                if (b[i] == '1') o_b++;
            }
        }
        if (e_a == e_b && o_a == o_b) cout << "YES\n";
        else cout << "NO\n";
    }

    return 0;
}
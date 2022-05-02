import React from "react";
import { connect } from "react-redux";
import { publicApi } from "../../redux/actions";

const Header = ({
    task,
    setting,
    save
}) => {
    return (
        <div className="w-full fixed top-0 flex items-center justify-center">
            <div className="w-1/6 rtl mt-4 flex justify-between">
                <div className="w-12 h-12 cursor-pointer" onClick={task}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAE70lEQVR4nO2bz09UVxTHP+fNjDip6aBdCdpdoygOWEYkomkwdis0abuzS5OaVHg2inRhTd2IjYDyH7TrJsCiSSVpmoKNlUEp9UeTumlEuqo/0DjgjPd08WYMRd6MIw/emzKfzczcH+ed+53z7r1n3h0oU6ZMmTKrF3Gr2H7z9Jrw7MwZo3pIYONKOuUdOi3It5lo7NTN7aefLdYi7NY1nHr0lcIJV4VKAqlS6LRSjxToWqyFqwCKHgLBGGm+0djzy7L5uIzUJT/fq5gRQT/BRQDLvbtUAZTq4AF+S5wfdd45Y1mMPAK8TN24fTmetEdLqawQrrfAYqiyp9TKClFUBPwfKSoCQEdBtLTKXpN40tZ40vbGmI8UGseqvwXKAvjtgN+UBfDbAb8pC+C3A35TFsBvB/ymyK3wy9SN25dfJwlx4fJkonfvK9h90W6pLDkCVNV44UiWF7YK2PXsmkuOgMlE3z4vHFkpuwtZ9XNAWQC/HfCboK0CC/FstncjaKvAQpbTNhDgVWClWPVzQFkAvx3wm6CvAgvxfFUI+iqwEM+vVbKrQHysfYtKqE1U30eoBjZnq+4iTAGXJCODSv5HG0sWYKWpvWYnLEM3sF/QxY54bEXZChzQkJ4rZK9kBGhIHo5kdF2vGj2CM+z7KjKA0SHB/MGayBQAz9KbVKQGlYMitAHrAXYkj11MxdLH77zTPzffrusBkNzjpMlEr++HRHZMnlwvz+a+A1qAFKI90fTzc7829c/k69eQ7IylmesE6QCiqPwckcjB8UT3o1ybwAvQkDwcSfPGDziDv6ditf7ecH68GBvZ22YAqAZGnkdjB3JnhgK/D8joul6ygyeTaSp28AA33u1Nksk0AfeAfeGnMz25ukALUHvNTqjoESClYrVONvVPubUtdDpksql/yjLmA2BWRT+tH+tohoALkJ3tBdGeQt98djPWnK/NROOFMYELgGVEzkCABYiPtW8B9gP3I1rxtVd2JaRngQdAS3zsaG1gBVAJtTmvMjB/1l4qEzv7Hgo66HwKfxhYAUT0AABGh5bB+JDzYvYEVgCUtwEsI7c9N23MLecSsi3IO8GNALPp8N/zCwtlny7ngf6TRc7NVUxXrE0DbAhuBEBkscLXzD7d+mSCHAH/ANVrI5mNwONcoVv2WczOtaJiriq7AE7niQCdBufAcTFee4WgtwBMyGzz3LYl2wEU/spzWly+ETipmJF40vbah4K8uJFVDgIDntp2bCLosGsEmGjsS4WzuUjwCxHaGpKdMa/s1V/vqARaAayQGXSNgGy21IXLOfuVIJ60fwRanJSWL7ywqcbqAq1UuDSx8+KfQV4FEKxTgILYtdfsRP7WOgqM5GtRN2Y3qupRwISMdjrXCDjxpH0BOEo2Hc6XEeaj9uqxzZZlroBUodo3uavPhgAnQzlmHsc6cb7ZasLhK/VX23cVa6NuzG7MDV7Q4Q1PKo/n6gIfAQC7r3z2Zioc/h4n3Z1V6AuFtHtiZ9/DfP3qr3dUqrG6VLUdqBB0WEJ8PL9fSQgA2b/xPZ3pyf5AIsADQQcRGTJq3TbR1BSAlYpussTUqNKKM9tXAgbVixueVB7/qeV0Zr7dkhEgRzzZvhuxulHee5X2gg6L4cREY9/E4vUlSu14R01I5SMDzQI1wFs4e/67CncFHX4uMnCzofdOPjv/AlVHNqd/4NX+AAAAAElFTkSuQmCC" />
                </div>
                <div className="w-12 h-12 cursor-pointer">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFkElEQVRoge2Ze2xURRSHvzP7SCiaGkURhBASsdW2u213C2iLxEQNvoKJ0WgMhESDig+6hQAaH6ghMUi7xYaEYPjDR9SEGKISwWciVKT2Ls1uqYJBjAiEaKOA2Fp2d45/7K5eWgpqsLuY/ZJN5p45c+78du6dmTsHihQpUqRIHpDBhoqe5X7v78eet6pzBMblo1PDo4cEeS01qvTpnorlJ9w13sGu3v6jzyksGaKwIJDxCktN/1EFHnfXDBGi6BwQrJX6XVNbto9YH/8GQWdRg2K3CTqXQULMUHcZD7Brasv2YCzyecBp3AYwXHkkiYeb2919dHMKIX+hqhZET1cuFIY8Wm4S4dYZZyoXCsMKCTiRgvrHz8RpH61ziWFHJBGOFuQMPNyT8r8ZkaKQQqMopNAoCik0ikIKjaKQQuNcFNJxKuNpv0dGmsodC8carzl8klG4KRGKbsldlu07UL978oTHBrfN64jU7FwyHv3rJMfjo3qol5T/WVRk7+WTx3bXRaODvfImpDLWeGXaJmOBWOTjwI5HJwCgpiZbvV5FH8nYtAwg5CwaUxWLvJe2yV1VsUWhwfGGfHPk9vv/5fdIlROpEvgEuDhr+llhncC9wEREItZKjxH7IdArsN7CXNc5W2/ayPU9tS3xXMwRH5GQ0zjOJWITwmbgQoFlwETgiIrt8PjsV8BBYIzCUoFxKJ+AfACM8Vj9uKx9yfl5ExILtR5GcABQvIna0lsFHkJlq6jO7StNXdpd2/pFvDp6sGzfgUmozBZhu8JT6ZKB20EnZUNt3NOw8tdc3JGftQQl7plHMp1AmFW188hD8XDrGmBtziUQXzwaYENw1W/Au9kfVU7TS6DlwP5RqdRid9i8vOyJ4KofBd0MIGrqc/ZA52OVAadxG8n0cZLp4wEn8kXAWTgtVy/YGgCFNzqmtx1zxxzREQk6kRutUmGgXOEOADT9LECwo+kKFe0ASlxNpoP5NNC5sDZRt3oPKmsQGgTuCziRC4DdAl/Hw9EPR1SIwmYRjOsYZH+ibvUeAPVoFChB2EwyNd/jH2WtTa1R9HaMiQI3912Q2lhy1HuEzETxYDYmKCZP64gsMKoNPvwBl3EmgE3LA4npbQe6alceMsb7MACaqds7pW0An2eCsVqD6p1kdUD+tii1acSjmuwDurK2AWC02yl9ot/g9ebqMiRTZWljbhD0alzr4ClGRA9B5gj/LHfefY/7RWhT0Y8qepb7s7ZNAEZ0XeWXTRMrv2yaiM+7DgDhA8gkoUC2CPoCMNsd8RT5EXlVYJlitwWcyNnptsot3XUt7/swY0+Y1FWoKRflaeAy039sNrBBvPKEprgWYZYR3Z/tDMBhj5hlAJ6+I3cgcjHwCyrNCl1+sV0IOkSIHVX6jOk/SiaZMjQP8W8QY68B3o+Fm3uBrcDWoNN4tSLzRHQ+sCFeHT0YcpZWJ3VgOSKzAAH9VLyyoqu6+WA2UhOAoO/E66IrTrrH2ejoP6UytjBg1HQCfpR7EnXRt/5Ou2Bn0wMquhY4jtpwbsaDPAgJOfN9SUZ3ADUgb5bt+2HO7smXLRKRuxVW9Zem3t47pW0AoKJnwXnePv9dKrIA0S0+7Xv2BKNfF7gLxUmXlNbnkqIjLiQQX3wJyfQOYDJoO4gPmOZy6TVWb0iLHBOhm5MXyBjQB8wAfhPLtPjUaA/kYYuSCK760WPMdcB3IA1kRPyE6ArgG2CMCrWC1JAR8SvwCvALEMqJUMstORF5EQLQVdv8vbUyE/RbYJPH+KoTodYnQV8EsCJTVDS3WL6WCEfn2ZS9UmEj0CfIbd1To5+5Y+Y1mVPWvuR891a8urOx3oq0u31UZH53qOXl3HVgx6MTEtPbDgyOVVBZqfKOhy/ye/y9J1s1lAi37jxT2z8AFjIjnbolKrUAAAAASUVORK5CYII=" />
                </div>
                <div className="w-12 h-12 cursor-pointer" onClick={() => save()}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACX0lEQVRoge2Zv28SYRiAnw8uVeqAiZPMbkTaNG0H0ck6uDipG/oXmEBMGtShWBPdKP9C61YHjf+C1KWYtEQmZzq1SekCMeFeByBSjh/3HXdw0HuSSy7f3ffjyXtvvi/vQUBAwDBUb0O8klswGhcfTJGUgtvTWJTAvhmJpirx3F+7fUK9DUa9ti0im9OSAFDwPNw4/xKv5BY0+lwmUUpXQcVMUyV/r+d/Wp9nBKC8umPpOy6dsYEz4BZKvjev33xmJzKWiICKAfSTmBTNkHoInCLqSbhR+3bnz6tro/r0EfGWpV+Zg0QpI/+v9I/edyor+eOQKY+AM4THixfh/VGf2cRFRLh3uUXd7/fe0XrhSCcyExfpYCfHKiv542ZIbQCnrcgYXwfJTE3ELnZlfC8C1py5UTM+974zEyLQypmQKRsAAk97n8+MCLRk2reW/JqaSNfm5wpTEJFiT4NlH3GC4cYgOpRXCw+8GNdBROQEYPkwnXRzIUul152Nseqkv3ZEBLWnIGsqVUyUMk7mHDCu2bnZddJfW8SMRLdC9RoKedE5YLpEFWG3uRh976Sztkj7SP2mffmGmdpHhhGI+I25EdFOdm+rLHIiqD0zEt3SqaCAAxGjXtsW2HS98gCAiinIhuvnArzVWpfuVIKkQDGoyjIOy4fppKlUEXiJpoiDHPGuynK0VjjonkOHuUn2QMRvBCJ+IxDxG4GI37g6Ip3/GJNYzDjzz01ERp5+vfhXqIPd+ftExJsCnBsMK+JZbO+WMp8UZD1f1TgIH8trO++6myyflocFODcYq4gXEHCV+QdNjeeoFHSgjwAAAABJRU5ErkJggg==" />
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    save: publicApi.saveChanges,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);